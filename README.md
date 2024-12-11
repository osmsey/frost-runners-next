# Frost Runners Next.js Project

## Project Setup

### Prerequisites
- Node.js
- npm or yarn
- Firebase Account
- Vercel Account

### Installation
1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Firebase Configuration
1. Create a Firebase project
2. Add your Firebase configuration to `.env.local`
3. Replace placeholders in `.env.local` with your actual Firebase project credentials

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel project settings
3. Deploy automatically from main branch

### Development
```
npm run dev
```

### Environment Variables
- `NEXT_PUBLIC_FIREBASE_API_KEY`: Firebase API Key
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Firebase Auth Domain
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Firebase Project ID
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Firebase Storage Bucket
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Firebase Messaging Sender ID
- `NEXT_PUBLIC_FIREBASE_APP_ID`: Firebase App ID
