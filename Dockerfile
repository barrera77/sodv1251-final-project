# Use a Node.js image as the base
FROM node:23

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json*", "./"]

# Install dependencies
RUN npm install --production

# Copy the rest of your application code
COPY . .

# Rebuild bcrypt for the correct environment
RUN npm rebuild bcrypt --build-from-source

# Expose the port your app runs on
EXPOSE 5006

# Command to run your app
CMD ["node", "backend/server.js"]

