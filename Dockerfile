
# write a dockerfile for a nodejs application that uses typescript and ts-node to run the application. The application should be built using the official node image and should install the necessary dependencies to run the application. The application should be built in a way that it can be easily deployed to a production environment multi stages
# Use official Node.js LTS image for the build stage
FROM node:18-alpine AS build
# Set working directory
WORKDIR /usr/src/app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm i
# Copy the rest of the application code
COPY . .
# Build the TypeScript application
RUN npm run build

# Use official Node.js LTS image for the production stage
FROM node:18-alpine
# Set working directory
WORKDIR /usr/src/app

# Copy the built application from the build stage
COPY --from=build /usr/src/app/dist ./dist
# Expose the port the app runs on
EXPOSE 3000
# Start the application using ts-node
CMD ["node", "dist/server.js"]

