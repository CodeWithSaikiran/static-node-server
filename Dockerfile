# --- Stage 1: Build & Compile ---
FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
# Install all dependencies (including devDependencies for types/compilation)
RUN npm install
COPY . .
# Compiles TS to JS (usually outputs to /dist)
RUN npm run build

# --- Stage 2: Production Dependencies ---
FROM node:18-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
# Install ONLY production dependencies (excludes typescript, ts-node, @types)
RUN npm install --omit=dev

# --- Stage 3: Final Production Image ---
FROM node:18-alpine
# Best Practice: Set Node environment to production
ENV NODE_ENV=production
WORKDIR /usr/src/app

# Copy only the compiled JS from stage 1
COPY --from=build /usr/src/app/dist ./dist
# Copy only the production node_modules from stage 2
COPY --from=deps /usr/src/app/node_modules ./node_modules
# Copy package.json to ensure paths/scripts remain valid
COPY package.json ./

EXPOSE 3000

# Use 'node' directly for maximum performance
CMD ["node", "dist/server.js"]