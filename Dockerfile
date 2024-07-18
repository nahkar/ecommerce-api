FROM node:21-alpine
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN yarn install
RUN npx prisma generate
COPY . .
RUN yarn build
EXPOSE 8088
CMD ["yarn", "start:prod"]
