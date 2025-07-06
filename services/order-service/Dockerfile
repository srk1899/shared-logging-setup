FROM node:18
WORKDIR /app
COPY . .
COPY ../../libs/logger-lib ./node_modules/logger-lib
RUN npm install
EXPOSE 5004
CMD ["node", "app.js"]
