FROM node:latest
WORKDIR /app/nestjs-back-end
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "dist/main"]