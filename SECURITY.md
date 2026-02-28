# 🔐 Security Guidelines

## ⚠️ IMPORTANT: Protect Your API Keys

### Files That Should NEVER Be Committed to Git

The following files contain sensitive credentials and are already included in `.gitignore`:

```
.env.local                    # Contains API keys and secrets
*.json                        # Google Service Account keys
citric-chemist-*.json         # Your specific service account file
credentials/                  # Any credential files
*.key, *.pem                  # Private keys
```

### Your Current Service Account File

**File**: `citric-chemist-488303-n5-ff87d6b38f41.json`
**Status**: ⚠️ **SENSITIVE - DO NOT SHARE**

This file contains a **private key** that gives access to your Google Cloud project.

### ✅ Best Practices

1. **Never share your service account JSON file**
   - Don't commit to Git
   - Don't share in public forums
   - Don't include in screenshots

2. **Use Environment Variables**
   ```env
   # .env.local (already in .gitignore)
   GOOGLE_APPLICATION_CREDENTIALS="./citric-chemist-488303-n5-ff87d6b38f41.json"
   YOUTUBE_API_KEY="your-api-key-here"
   ```

3. **Rotate Keys Regularly**
   - Create new API keys every 90 days
   - Revoke old keys immediately
   - Update in production after deployment

4. **Use API Key Restrictions**
   - Set HTTP referrer restrictions
   - Limit to specific APIs (YouTube Data API v3)
   - Set IP restrictions for production

### 🚨 If You Accidentally Committed Sensitive Files

1. **Revoke the key immediately**
   - Go to: https://console.cloud.google.com/apis/credentials
   - Delete the compromised API key or service account
   - Create a new one

2. **Remove from Git history**
   ```bash
   # Remove file from Git history
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch PATH_TO_FILE" \
     --prune-empty --tag-name-filter cat -- --all
   
   # Force push (be careful!)
   git push origin --force --all
   ```

3. **Check for unauthorized usage**
   - Review Google Cloud Console logs
   - Check API quota usage
   - Monitor for unusual activity

### 📋 Security Checklist

- [ ] Service account JSON file is in `.gitignore`
- [ ] `.env.local` file is in `.gitignore`
- [ ] API keys have proper restrictions set
- [ ] YouTube Data API v3 is enabled
- [ ] Quota monitoring is set up
- [ ] Team members understand security policies
- [ ] Key rotation schedule is documented

### 🔍 Verify Your Setup

Run the test script to verify your API configuration:

```bash
npm run test:youtube
```

This will check:
- ✅ API key is configured
- ✅ YouTube API is accessible
- ✅ Quota is available
- ✅ Connection is working

### 📚 Additional Resources

- [Google Cloud Security Best Practices](https://cloud.google.com/security/best-practices)
- [API Key Restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_http_restrictions)
- [Service Account Authentication](https://cloud.google.com/docs/authentication/provide-credentials-adc#service-account)

---

**Remember**: Security is everyone's responsibility. When in doubt, revoke and rotate your keys!
