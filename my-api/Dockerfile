# Base image
FROM node:18

# Set work dir
WORKDIR /app

# Copy package.json & install dependencies
COPY package*.json ./
RUN npm install

# Copy app code
COPY . .

# Expose port
EXPOSE 3000

# Start API
CMD ["npm", "start"]
