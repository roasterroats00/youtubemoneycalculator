# YouTube API Setup Guide

## 📋 Prerequisites

Anda sudah memiliki file service account Google Cloud:
- File: `citric-chemist-488303-n5-ff87d6b38f41.json`
- Project ID: `citric-chemist-488303-n5`
- Client Email: `youtube-money-calculator@citric-chemist-488303-n5.iam.gserviceaccount.com`

## 🔑 Cara Setup YouTube Data API v3

### Option 1: Menggunakan API Key (Recommended untuk Public Usage)

1. **Buka Google Cloud Console**
   - Kunjungi: https://console.cloud.google.com/apis/credentials
   - Pilih project: `citric-chemist-488303-n5`

2. **Enable YouTube Data API v3**
   - Buka: https://console.cloud.google.com/apis/library/youtube.googleapis.com
   - Klik "ENABLE"

3. **Create API Key**
   - Buka: https://console.cloud.google.com/apis/credentials
   - Klik "+ CREATE CREDENTIALS" → "API Key"
   - Copy API Key yang dihasilkan

4. **Add API Key ke .env.local**
   ```env
   YOUTUBE_API_KEY="AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   ```

5. **Restrict API Key (Security)**
   - Klik pada API Key yang baru dibuat
   - Di "Application restrictions", pilih "HTTP referrers"
   - Add referrer: `http://localhost:3000` (untuk development)
   - Di "API restrictions", pilih "Restrict key"
   - Centang "YouTube Data API v3"
   - Klik "SAVE"

### Option 2: Menggunakan Service Account (Untuk Server-Side Only)

Service account yang sudah Anda miliki dapat digunakan untuk akses server-side.

1. **Pastikan file JSON ada di project root**
   ```
   youtubemoneycalculator/
   └── citric-chemist-488303-n5-ff87d6b38f41.json
   ```

2. **Update .env.local**
   ```env
   GOOGLE_APPLICATION_CREDENTIALS="./citric-chemist-488303-n5-ff87d6b38f41.json"
   YOUTUBE_PROJECT_ID="citric-chemist-488303-n5"
   ```

3. **Enable YouTube API di Google Cloud Console**
   - Buka: https://console.cloud.google.com/apis/library/youtube.googleapis.com
   - Pastikan project `citric-chemist-488303-n5` terpilih
   - Klik "ENABLE"

4. **Add Service Account ke YouTube Channel (Optional)**
   - Jika ingin akses channel tertentu, invite service account email:
   - `youtube-money-calculator@citric-chemist-488303-n5.iam.gserviceaccount.com`
   - Sebagai owner/manager di YouTube Studio

## 🔧 Testing API Connection

### Test dengan API Key:
```bash
curl "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCX6OQ3DkcsbYNE6H8uQQuVA&key=YOUR_API_KEY"
```

### Test dengan Service Account:
```bash
# Install Google Auth Library
npm install google-auth-library

# Create test script
const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
  keyFile: './citric-chemist-488303-n5-ff87d6b38f41.json',
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});

const youtube = google.youtube({ version: 'v3', auth });
const response = await youtube.channels.list({
  part: 'snippet',
  id: 'UCX6OQ3DkcsbYNE6H8uQQuVA',
});
```

## 📊 API Quota Limits

YouTube Data API v3 memiliki quota limits:
- **Free Tier**: 10,000 units/hari
- **Cost per request**:
  - `channels.list`: 1 unit
  - `videos.list`: 1 unit
  - `search.list`: 100 units
  - `activities.list`: 10 units

### Tips Menghemat Quota:
1. Cache hasil API call (disarankan 24 jam)
2. Gunakan `search.list` dengan bijak (100 units/call)
3. Implement rate limiting untuk user
4. Monitor usage di: https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas

## 🔒 Security Best Practices

### ⚠️ PENTING: Private Key Security

File `citric-chemist-488303-n5-ff87d6b38f41.json` berisi **PRIVATE KEY** yang sensitif:

1. **JANGAN PERNAH commit file JSON ke Git**
   ```bash
   # Sudah ada di .gitignore
   *.json
   .env.local
   ```

2. **JANGAN share file JSON di public repository**
   - Jika sudah terlanjur commit, segera revoke dan buat baru
   - Revoke: Google Cloud Console → IAM & Admin → Service Accounts → Delete Key

3. **Gunakan Environment Variables**
   - Simpan path ke file JSON di `.env.local`
   - Jangan hardcode path di source code

4. **Rotate Keys Secara Berkala**
   - Buat key baru setiap 90 hari
   - Update di production setelah deploy

## 🚀 Usage di Code

### Menggunakan API Key (Recommended):
```typescript
// src/lib/youtube.ts
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

async function getChannel(channelId: string) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`
  );
  return response.json();
}
```

### Menggunakan Service Account:
```typescript
import { GoogleAuth } from 'google-auth-library';

const auth = new GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
});

async function getChannel(channelId: string) {
  const client = await auth.getClient();
  const youtube = google.youtube({ version: 'v3', auth: client });
  return await youtube.channels.list({
    part: 'snippet,statistics',
    id: channelId,
  });
}
```

## 📝 Checklist Setup

- [ ] Enable YouTube Data API v3 di Google Cloud Console
- [ ] Create API Key atau gunakan Service Account yang ada
- [ ] Add credentials ke `.env.local`
- [ ] Test API connection
- [ ] Setup quota monitoring
- [ ] Implement caching untuk reduce API calls
- [ ] Add rate limiting untuk users
- [ ] Secure private key (jangan commit ke Git)

## 🔗 Resources

- YouTube Data API Docs: https://developers.google.com/youtube/v3
- Google Cloud Console: https://console.cloud.google.com
- API Quota Calculator: https://developers.google.com/youtube/v3/getting-started#quota
- Authentication Guide: https://developers.google.com/youtube/v3/guides/authentication

## 🆘 Troubleshooting

### Error: "API Key not valid"
- Pastikan API Key sudah di-copy dengan benar (tanpa spasi)
- Check apakah YouTube Data API v3 sudah di-enable
- Tunggu 1-2 menit setelah create API Key

### Error: "Quota exceeded"
- Check usage di Google Cloud Console
- Implement caching
- Request quota increase: https://developers.google.com/youtube/v3/getting-started#quota

### Error: "Access forbidden"
- Check API restrictions di credential settings
- Pastikan domain/IP sudah di-whitelist

## 📞 Support

Jika ada masalah:
1. Check Google Cloud Console → APIs & Services → Dashboard
2. Review error logs di Cloud Logging
3. Consult YouTube API documentation
