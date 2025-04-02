# Use the official Node.js image as a base
FROM node:23

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install project dependencies
RUN pnpm install

# Copy the rest of your application code
COPY . .

# Expose the port that the app runs on
EXPOSE 8080

# Command to start the application
CMD ["./entrypoint.sh"]
