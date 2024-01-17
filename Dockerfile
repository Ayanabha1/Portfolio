FROM node:18-alpine
WORKDIR /app

COPY package*.json .

# Install dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run" , "start"]