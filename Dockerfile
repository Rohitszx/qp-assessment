
FROM node:16-alpine
WORKDIR /app
RUN apk add --no-cache python3 make g++ bash
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
