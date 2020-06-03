FROM node:latest

EXPOSE 80

# Define dir
WORKDIR /resume-api

# Copy package.json
COPY ./package*.json ./

# Install dependencies
RUN npm install --no-progress --ignore-optional

# Start compiling vuejs
CMD npm run dev
#CMD sh