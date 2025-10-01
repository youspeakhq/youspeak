# You Speak - Language Learning App

A React Native mobile application built with Expo and AWS Amplify for the You Speak Hackathon. This app provides an interactive language learning experience with AI-powered features, gamification, and real-time collaboration.

## 🚀 Tech Stack

- **Frontend**: React Native (Expo SDK 54)
- **Backend**: AWS Amplify Gen 2
- **AI Services**: AWS Bedrock, Amazon Q
- **Cloud Services**: AWS Lambda, DynamoDB, S3, AppSync
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js (LTS version recommended)
- pnpm (`npm install -g pnpm`)
- Expo CLI
- AWS Account with Amplify access
- iOS Simulator (Mac) or Android Emulator

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   cd youspeak/youspeak-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure AWS Credentials**
   Ensure your AWS credentials are configured:
   ```bash
   aws configure
   ```

## 🏃 Running the App

### Development Mode

Start the Expo development server:
```bash
pnpm start
```

### Run on Specific Platform

**iOS Simulator:**
```bash
pnpm run ios
```

**Android Emulator:**
```bash
pnpm run android
```

**Web Browser:**
```bash
pnpm run web
```

## ☁️ AWS Amplify Backend

### Start Local Sandbox

Run Amplify in sandbox mode for local development:
```bash
pnpm run amplify:sandbox
```

This will:
- Deploy your backend to a personal cloud sandbox
- Watch for file changes and auto-deploy
- Generate the `amplify_outputs.json` configuration file

### Deploy to Production

Deploy to a specific branch:
```bash
pnpm run amplify:deploy
```

### Generate Amplify Outputs

Generate the configuration file from an existing deployment:
```bash
pnpm run amplify:generate
```

## 📁 Project Structure

```
youspeak-app/
├── amplify/                 # Amplify backend configuration
│   ├── auth/               # Authentication resources
│   ├── data/               # GraphQL API & Data models
│   ├── storage/            # S3 Storage configuration
│   └── backend.ts          # Main backend definition
├── assets/                 # Images, fonts, and static files
├── App.js                  # Main application entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🔑 Key Features (Planned)

### Phase 1: Setup & Planning ✅
- [x] Project initialization
- [x] AWS Amplify configuration
- [x] Backend resource definition

### Phase 2: Core Development (Oct 2-3)
- [ ] Authentication (Cognito)
- [ ] User profiles with avatars
- [ ] Audio recording functionality
- [ ] AI-powered quizzes (Bedrock)
- [ ] Leaderboard system

### Phase 3: Integration (Oct 4)
- [ ] Real-time features (WebSockets)
- [ ] AWS Bedrock integration
- [ ] Amazon Q integration
- [ ] Multilingual support

### Phase 4: Testing & Polish (Oct 5)
- [ ] Unit tests
- [ ] UI/UX improvements
- [ ] Performance optimization

### Phase 5: Documentation (Oct 6)
- [ ] Video demo
- [ ] Architecture diagrams
- [ ] Deployment guide

## 🗄️ Backend Resources

### Authentication
- Email-based authentication using Amazon Cognito
- User pools for secure authentication

### Data (GraphQL API)
- **User**: Profile management with username, email, avatar, SPK balance
- **Lesson**: Language lessons with difficulty levels
- **Score**: User progress tracking

### Storage
- Profile pictures storage
- Audio recordings storage
- Public assets

## 🔒 Security

- Owner-based authorization for user data
- Authenticated access for lessons
- Secure S3 storage with access controls

## 🤝 Contributing

This is a hackathon project with daily standups. See `DEV_PLAN.md` for the complete development roadmap.

## 📝 Environment Variables

Create a `.env` file in the root directory (not committed to git):
```bash
# AWS Configuration (if needed for custom resources)
AWS_REGION=us-east-1
```

## 🐛 Troubleshooting

### Amplify Sandbox Issues
```bash
# Clear Amplify cache
rm -rf .amplify amplify_outputs.json
pnpm run amplify:sandbox
```

### Expo Cache Issues
```bash
# Clear Expo cache
expo start -c
```

### pnpm Installation Issues
```bash
# Ensure node-linker is set to hoisted (already configured)
cat .npmrc
```

## 📚 Documentation

- [Expo Documentation](https://docs.expo.dev/)
- [AWS Amplify Gen 2 Documentation](https://docs.amplify.aws/react-native/)
- [AWS Bedrock Documentation](https://docs.aws.amazon.com/bedrock/)
- [React Native Documentation](https://reactnative.dev/)

## 📄 License

See LICENSE file in the root directory.

## 👥 Team

- **Backend/CTO (BE)**: AWS infrastructure, backend APIs
- **Mobile/Frontend (ME)**: React Native app, UI/UX
- **AI Integration (AI)**: Bedrock, Amazon Q, speech services

## 🎯 Hackathon Submission Dates

- **Start**: October 1, 2025
- **Submission**: October 6, 2025
- **Presentation**: October 11, 2025

