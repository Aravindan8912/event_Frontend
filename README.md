# Event Frontend - React + TypeScript + Vite

This is a React frontend application for an event management system.

## API Configuration

The application is configured to work with a backend API. In development, it uses a Vite proxy to avoid CORS issues.

### Development (Default)

The app automatically proxies API requests to `http://13.49.238.61:3000` during development.

### Production

For production deployment, create a `.env` file in the root directory:

```env
# Replace with your actual backend API URL
VITE_API_BASE_URL=http://13.49.238.61:3000
```

### Common API URL configurations:

- **Same domain, different port**: `http://13.49.238.61:8080`
- **Different domain**: `https://your-backend-domain.com`
- **Local development**: `http://localhost:3000`

## Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with your API configuration

3. Start the development server:
   ```bash
   npm run dev
   ```

## Troubleshooting

If you're getting 404 errors when making API calls:

1. Check that your backend server is running
2. Verify the API base URL in your `.env` file
3. Ensure the backend endpoints match the frontend expectations:
   - POST `/api/auth/register` - User registration
   - POST `/api/auth/login` - User login
   - GET `/api/users/profile` - Get user profile
