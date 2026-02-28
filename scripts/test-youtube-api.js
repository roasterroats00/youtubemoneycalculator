/**
 * YouTube API Connection Test Script
 * 
 * Usage: npm run test:youtube
 */

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';

async function testYouTubeAPI() {
  console.log('🔍 Testing YouTube Data API v3 Connection...\n');

  // Check if API key is configured
  if (!YOUTUBE_API_KEY) {
    console.error('❌ Error: YOUTUBE_API_KEY is not set');
    console.error('📚 Please add YOUTUBE_API_KEY to your .env.local file');
    console.error('🔗 Get API key from: https://console.cloud.google.com/apis/credentials\n');
    process.exit(1);
  }

  // Mask API key for display
  const maskedKey = `${YOUTUBE_API_KEY.substring(0, 7)}...${YOUTUBE_API_KEY.substring(YOUTUBE_API_KEY.length - 5)}`;
  console.log(`✅ YOUTUBE_API_KEY found: ${maskedKey}\n`);

  // Test with a known channel (MrBeast)
  const testChannelId = 'UCX6OQ3DkcsbYNE6H8uQQuVA';
  const testUrl = `${YOUTUBE_API_BASE}/channels?part=snippet,statistics&id=${testChannelId}&key=${YOUTUBE_API_KEY}`;

  console.log('📡 Sending request to YouTube API...');
  console.log(`   Channel ID: ${testChannelId}`);
  console.log(`   URL: ${testUrl.substring(0, 100)}...\n`);

  try {
    const response = await fetch(testUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || `HTTP ${response.status}`);
    }

    if (!data.items || data.items.length === 0) {
      throw new Error('Channel not found');
    }

    const channel = data.items[0];
    console.log('✅ YouTube API Connection Successful!\n');
    console.log('📊 Channel Data Retrieved:');
    console.log('   ──────────────────────────────────────');
    console.log(`   Title:        ${channel.snippet.title}`);
    console.log(`   Subscribers:  ${parseInt(channel.statistics.subscriberCount).toLocaleString()}`);
    console.log(`   Total Views:  ${parseInt(channel.statistics.viewCount).toLocaleString()}`);
    console.log(`   Total Videos: ${parseInt(channel.statistics.videoCount).toLocaleString()}`);
    console.log(`   Country:      ${channel.snippet.country || 'N/A'}`);
    console.log('   ──────────────────────────────────────\n');

    // Check quota usage
    console.log('📈 Quota Usage:');
    console.log('   Cost: 1 unit (channels.list)');
    console.log('   Daily Limit: 10,000 units');
    console.log('   Check usage: https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas\n');

    console.log('🎉 YouTube API is working correctly!\n');
    console.log('Next steps:');
    console.log('   1. Run "npm run dev" to start the development server');
    console.log('   2. Test the Channel Analyzer feature');
    console.log('   3. Monitor API usage in Google Cloud Console\n');

  } catch (error) {
    console.error('❌ YouTube API Test Failed!\n');
    console.error(`   Error: ${error.message}\n`);
    
    if (error.message.includes('API key')) {
      console.error('🔧 Troubleshooting:');
      console.error('   • Make sure YouTube Data API v3 is enabled');
      console.error('   • Check if API key is correct (no extra spaces)');
      console.error('   • Wait 1-2 minutes after creating a new API key');
      console.error('   • Enable at: https://console.cloud.google.com/apis/library/youtube.googleapis.com\n');
    } else if (error.message.includes('quota')) {
      console.error('🔧 Troubleshooting:');
      console.error('   • Daily quota exceeded (10,000 units)');
      console.error('   • Wait for quota to reset or request increase');
      console.error('   • Check usage: https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas\n');
    } else if (error.message.includes('forbidden') || error.message.includes('unauthorized')) {
      console.error('🔧 Troubleshooting:');
      console.error('   • API key restrictions may be blocking access');
      console.error('   • Check "Application restrictions" in Cloud Console');
      console.error('   • Add http://localhost:3000 to allowed referrers\n');
    }

    process.exit(1);
  }
}

// Run the test
testYouTubeAPI().catch(console.error);
