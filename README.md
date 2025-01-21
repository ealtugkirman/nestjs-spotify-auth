# NestJS Spotify OAuth2 Authentication

## Overview

This project is a NestJS backend application that integrates Spotify OAuth2 authentication using the Authorization Code Flow. It allows users to log in with their Spotify accounts, retrieves their profile information, and provides secure access to protected API endpoints using JWT (JSON Web Tokens).

## Features

- Spotify OAuth2 Authentication: Users can authenticate using their Spotify accounts.
- JWT Generation: Securely generates JWT tokens upon successful authentication.
- Protected Routes: Access to certain API endpoints is restricted to authenticated users.
- User Profile Retrieval: Fetches and returns user profile information from Spotify.
- Scalable Architecture: Built with NestJS, promoting modularity and maintainability.

## Technologies Used

- NestJS - A progressive Node.js framework for building efficient and scalable server-side applications.
- TypeScript - Typed superset of JavaScript.
- Passport - Authentication middleware for Node.js.
- passport-spotify - Spotify authentication strategy for Passport.
- JWT (JSON Web Tokens) - For secure authentication.
- Node.js - JavaScript runtime environment.
- Spotify Web API - For accessing Spotify user data.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- A Spotify Developer Account with an application registered to obtain CLIENT ID and CLIENT SECRET.

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

Clone the repository to your local machine using your preferred method (e.g., GitHub Desktop, command line).

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies using npm.

### 3. Configure Environment Variables

Create a .env file in the root directory of the project and add the required environment variables. These include your Spotify application's Client ID and Client Secret, a secret key for signing JWT tokens, and the callback URL that Spotify will use to redirect after authentication.

### 4. Register Your Application with Spotify

1. Visit the Spotify Developer Dashboard.
2. Log in with your Spotify account.
3. Create a new application and provide the necessary details.
4. Note down the Client ID and Client Secret provided.
5. In your application's settings, add the callback URL (e.g., <http://localhost:3000/auth/redirect>) to the Redirect URIs.

### 5. Generate Auth Module, Service, and Controller

If you haven't already generated the necessary files, use the NestJS CLI to create the auth module, service, and controller without spec files.

### 6. Install Required Dependencies

Ensure all required dependencies for Passport, JWT, and Spotify authentication are installed. This includes packages for handling authentication strategies and type definitions for TypeScript.

### 7. Running the Application

Start the application in development mode. Once running, the application will be accessible at <http://localhost:3000>.

## Project Structure

The project is organized into several modules and folders to maintain a clean and scalable architecture. Key directories include:

- auth/: Contains authentication-related modules, services, controllers, guards, and strategies.
- profile/: Manages user profile retrieval and related functionalities.
- app.module.ts: The root module that imports and configures all other modules.
- main.ts: The entry point of the application.
- .env: Stores environment variables securely.

## API Endpoints

### 1. Authenticate with Spotify

**Endpoint:** `/auth/login`

Initiates the Spotify OAuth2 authentication process by redirecting the user to Spotify's login page.

### 2. Spotify Redirect

**Endpoint:** `/auth/redirect`

After successful authentication, Spotify redirects the user to this endpoint. This route handles the retrieval of user information and JWT generation.

### 3. Protected Route Example

**Endpoint:** `/profile`

Returns the authenticated user's profile information. Access to this endpoint requires a valid JWT token, ensuring that only authenticated users can retrieve profile data.

## Usage Instructions

### 1. Authenticate User

- Navigate to the /auth/login endpoint in your browser.
- You will be redirected to Spotify's login page.
- Log in with your Spotify credentials and authorize the application.
- After successful authentication, Spotify redirects you to the /auth/redirect endpoint with user information and a JWT token.

### 2. Access Protected Routes

- Use the received JWT token to access protected API endpoints.
- Include the token in the Authorization header of your HTTP requests to authenticate and authorize access.

### 3. Frontend Integration Example

If you have a frontend application, you can integrate the authentication flow as follows:

#### a. Login Button

Create a button that redirects users to the Spotify login page to initiate authentication.

#### b. Handling Redirect and Storing JWT

After Spotify redirects back to your application, handle the token and store it securely for future requests.

#### c. Fetching Protected Data

Use the stored JWT token to fetch data from protected endpoints, ensuring secure access based on user authentication.

## Security Considerations

- Use HTTPS: Ensure that your application uses HTTPS in production to secure data in transit.
- Secure JWT Secret: Keep your JWT_SECRET secure and do not expose it in your codebase or version control.
- Token Expiry: Set appropriate expiration times for JWT tokens and implement refresh tokens if necessary.
- CORS Configuration: Properly configure CORS to restrict access to your API from unauthorized origins.
- Environment Variables: Do not commit your .env file to version control. Use environment variables securely in production environments.

## Troubleshooting

- Invalid Spotify Credentials: Ensure that your SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET are correct and match those in your Spotify Developer Dashboard.
- Redirect URI Mismatch: Verify that the CALLBACK_URL in your .env file matches the Redirect URI configured in the Spotify application settings.
- CORS Issues: If accessing the API from a different domain, ensure CORS is properly configured in your NestJS application.
- JWT Validation Errors: Ensure that the JWT_SECRET used to sign the tokens is consistent across your application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear and descriptive messages.
4. Push to the branch.
5. Open a pull request outlining your changes and their purpose.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact <x.com/ealtugk>.

Happy Coding!
