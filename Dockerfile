# Use an official nginx image as a parent image
FROM nginx:alpine

# Copy the current directory contents into the nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]