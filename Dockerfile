 # === Step 1: Build React Frontend ===
FROM node:22.14.0 AS frontend

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend source
COPY . .

# Build the React app
RUN npm run build

# === Step 2: Set Up Backend ===
FROM node:22.14.0

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend files (assuming backend files are in the root)
COPY . .

# Serve frontend with Express (assuming backend serves React build)
RUN mkdir -p /app/client/build
COPY --from=frontend /app/build /app/client/build

# Expose necessary ports (Updated to 8000)
EXPOSE 8000

# Start the backend server
CMD ["node", "app.js"]
