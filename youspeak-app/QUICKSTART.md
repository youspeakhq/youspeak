# 🚀 Quick Start Guide

Get You Speak up and running in under 5 minutes!

## Prerequisites Check

```bash
# Verify Node.js (should be v18+)
node --version

# Verify pnpm
pnpm --version

# Verify AWS CLI
aws --version
```

## Step 1: Install Dependencies (1 min)

```bash
cd youspeak-app
pnpm install
```

## Step 2: Start Amplify Sandbox (2 min)

This creates your personal cloud development environment:

```bash
pnpm run amplify:sandbox
```

Wait for:
- ✅ Auth resources deployed
- ✅ Data resources deployed  
- ✅ Storage resources deployed
- ✅ `amplify_outputs.json` generated

**Keep this terminal running!** It watches for changes.

## Step 3: Start Expo Development Server (1 min)

In a **new terminal**:

```bash
cd youspeak-app
pnpm start
```

## Step 4: Launch on Your Device (1 min)

Choose your platform:

- Press `i` for iOS Simulator
- Press `a` for Android Emulator  
- Press `w` for Web Browser
- Scan QR code with Expo Go app on your phone

## 🎉 You're Ready!

The app should now be running with:
- ✅ Authentication ready (Cognito)
- ✅ GraphQL API available
- ✅ S3 Storage configured

## Next Steps

1. **Implement Authentication UI** (Phase 2, Day 2)
2. **Add User Profile Screen** (Phase 2, Day 2)
3. **Build AI SpeaX Room** (Phase 2, Day 3)

## Common Issues

### Amplify Sandbox Stuck?
```bash
# Kill and restart
pnpm run amplify:sandbox
```

### Expo Not Starting?
```bash
# Clear cache
pnpm start -- --clear
```

### Need to Reset Everything?
```bash
# Clear Amplify resources (will prompt for confirmation)
ampx sandbox delete
rm amplify_outputs.json
```

## Development Workflow

1. Make changes to `amplify/` resources
2. Sandbox auto-deploys changes
3. Refresh your app to see updates
4. Commit changes when ready

---

**Happy Coding! 🎯** See `README.md` for detailed documentation.

