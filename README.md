# Frost Runners Next.js Project

## Repository
https://github.com/osmsey/frost-runners-next

## Project Setup

### Prerequisites
- Node.js
- npm or yarn
- Firebase Account
- Vercel Account
- GitHub Account

### Installation
1. Clone the repository
   ```
   git clone https://github.com/osmsey/frost-runners-next.git
   cd frost-runners-next
   ```
2. Install dependencies:
   ```
   npm install
   ```

### Firebase Configuration
1. Create a Firebase project
2. Add your Firebase configuration to `.env.local`
3. Replace placeholders in `.env.local` with your actual Firebase project credentials

### Vercel Deployment
1. Go to [Vercel](https://vercel.com/)
2. Click "New Project"
3. Import Git Repository: osmsey/frost-runners-next
4. Set up environment variables in Vercel project settings
5. Deploy

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
