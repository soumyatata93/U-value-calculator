# Use an Nginx image to serve the static files
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
