FROM node:18
WORKDIR /app

COPY services/user-service/. .  # or order-service depending on the service
COPY libs/logger-lib ./node_modules/logger-lib

RUN npm install
EXPOSE 5004  # or 5004 for order-service
CMD ["node", "app.js"]
