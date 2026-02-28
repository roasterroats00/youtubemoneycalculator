const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

// Support both API Key and Service Account authentication
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!YOUTUBE_API_KEY && !GOOGLE_APPLICATION_CREDENTIALS) {
  console.warn("⚠️  YouTube API credentials not configured. Please set YOUTUBE_API_KEY or GOOGLE_APPLICATION_CREDENTIALS in your .env.local file.");
  console.warn("📚 Get YouTube API Key: https://console.cloud.google.com/apis/credentials");
}

export interface YouTubeChannelData {
  channelId: string;
  title: string;
  subscribers: number;
  totalViews: number;
  totalVideos: number;
  country: string | null;
  customUrl?: string;
}

export interface YouTubeVideoStats {
  videoId: string;
  views: number;
  likes: number;
  comments: number;
}

/**
 * Extract channel ID from various YouTube URL formats
 */
export function extractChannelId(url: string): string | null {
  try {
    const urlObj = new URL(url);
    
    // Handle /channel/ID format
    const channelMatch = urlObj.pathname.match(/\/channel\/([a-zA-Z0-9_-]+)/);
    if (channelMatch) {
      return channelMatch[1];
    }

    // Handle /c/username or /@username format
    const handleMatch = urlObj.pathname.match(/\/(?:c\/|@)([a-zA-Z0-9_-]+)/);
    if (handleMatch) {
      // We'll need to resolve username to channel ID
      return null; // Will be handled by API lookup
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Get channel statistics by channel ID
 */
export async function getChannelById(channelId: string): Promise<YouTubeChannelData | null> {
  if (!YOUTUBE_API_KEY) {
    throw new Error("YouTube API key not configured");
  }

  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE}/channels?part=snippet,statistics,contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to fetch channel data");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return null;
    }

    const channel = data.items[0];
    return {
      channelId: channel.id,
      title: channel.snippet.title,
      subscribers: parseInt(channel.statistics.subscriberCount) || 0,
      totalViews: parseInt(channel.statistics.viewCount) || 0,
      totalVideos: parseInt(channel.statistics.videoCount) || 0,
      country: channel.snippet.country || null,
      customUrl: channel.snippet.customUrl,
    };
  } catch (error) {
    console.error("Error fetching channel:", error);
    throw error;
  }
}

/**
 * Get channel by username/handle
 */
export async function getChannelByHandle(handle: string): Promise<YouTubeChannelData | null> {
  if (!YOUTUBE_API_KEY) {
    throw new Error("YouTube API key not configured");
  }

  try {
    // Remove @ if present
    const cleanHandle = handle.replace("@", "");
    
    const response = await fetch(
      `${YOUTUBE_API_BASE}/channels?part=snippet,statistics,contentDetails&forHandle=${cleanHandle}&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to fetch channel data");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return null;
    }

    const channel = data.items[0];
    return {
      channelId: channel.id,
      title: channel.snippet.title,
      subscribers: parseInt(channel.statistics.subscriberCount) || 0,
      totalViews: parseInt(channel.statistics.viewCount) || 0,
      totalVideos: parseInt(channel.statistics.videoCount) || 0,
      country: channel.snippet.country || null,
      customUrl: channel.snippet.customUrl,
    };
  } catch (error) {
    console.error("Error fetching channel by handle:", error);
    throw error;
  }
}

/**
 * Get recent videos from a channel to calculate average views
 */
export async function getChannelVideos(channelId: string, maxResults = 15): Promise<YouTubeVideoStats[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error("YouTube API key not configured");
  }

  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE}/search?part=snippet&channelId=${channelId}&order=date&maxResults=${maxResults}&type=video&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to fetch videos");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return [];
    }

    const videoIds = data.items.map((item: any) => item.id.videoId).join(",");

    const statsResponse = await fetch(
      `${YOUTUBE_API_BASE}/videos?part=statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );

    if (!statsResponse.ok) {
      return [];
    }

    const statsData = await statsResponse.json();

    return statsData.items.map((video: any) => ({
      videoId: video.id,
      views: parseInt(video.statistics.viewCount) || 0,
      likes: parseInt(video.statistics.likeCount) || 0,
      comments: parseInt(video.statistics.commentCount) || 0,
    }));
  } catch (error) {
    console.error("Error fetching channel videos:", error);
    return [];
  }
}

/**
 * Calculate average views from recent videos
 */
export function calculateAvgViews(videos: YouTubeVideoStats[]): number {
  if (videos.length === 0) return 0;
  
  const totalViews = videos.reduce((sum, video) => sum + video.views, 0);
  return Math.round(totalViews / videos.length);
}

/**
 * Search for a channel by name
 */
export async function searchChannel(query: string): Promise<YouTubeChannelData[]> {
  if (!YOUTUBE_API_KEY) {
    throw new Error("YouTube API key not configured");
  }

  try {
    const response = await fetch(
      `${YOUTUBE_API_BASE}/search?part=snippet&q=${encodeURIComponent(query)}&type=channel&maxResults=5&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "Failed to search channels");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return [];
    }

    const channelIds = data.items.map((item: any) => item.id.channelId).join(",");

    const channelsResponse = await fetch(
      `${YOUTUBE_API_BASE}/channels?part=snippet,statistics&id=${channelIds}&key=${YOUTUBE_API_KEY}`
    );

    const channelsData = await channelsResponse.json();

    return channelsData.items.map((channel: any) => ({
      channelId: channel.id,
      title: channel.snippet.title,
      subscribers: parseInt(channel.statistics.subscriberCount) || 0,
      totalViews: parseInt(channel.statistics.viewCount) || 0,
      totalVideos: parseInt(channel.statistics.videoCount) || 0,
      country: channel.snippet.country || null,
      customUrl: channel.snippet.customUrl,
    }));
  } catch (error) {
    console.error("Error searching channels:", error);
    return [];
  }
}
