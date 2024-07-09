FROM node:alpine AS build
WORKDIR /appwriteBlog
COPY package-lock.json package.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /appwriteBlog/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



