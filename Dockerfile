# Use a lightweight Node.js base image
FROM node:18

# Working directory
WORKDIR /app

# Copy your code
COPY package.json ./
RUN yarn

COPY server.js ./
COPY /public /app/public 

# Expose appropriate port
EXPOSE 8080 

# Run the serv
CMD ["node", "server.js"]
