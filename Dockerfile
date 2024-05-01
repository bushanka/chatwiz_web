FROM node:18.13.0-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:stable-alpine
EXPOSE 80
EXPOSE 443
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY certs/fullchain.pem /etc/nginx/certs/fullchain.pem
COPY certs/privkey.pem /etc/nginx/certs/privkey.pem
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]