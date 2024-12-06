# Use the official Nginx base image
FROM nginx:1.26.2

ENV NGINX_VERSION="1.26.2"
ENV NGINX_VTS_VERSION="0.2.2"

RUN apt update && apt-get install -y gnupg2 && curl http://nginx.org/packages/keys/nginx_signing.key | apt-key add -

RUN echo "deb-src http://nginx.org/packages/debian/ bookworm nginx" >> /etc/apt/sources.list \
  && apt-get update \
  && apt-get install -y dpkg-dev curl \
  && mkdir -p /opt/rebuildnginx \
  && chmod 0777 /opt/rebuildnginx \
  && cd /opt/rebuildnginx \
  && su --preserve-environment -s /bin/bash -c "apt-get source nginx=${NGINX_VERSION}" _apt \
  && apt-get build-dep -y nginx=${NGINX_VERSION}

RUN cd /opt \
  && curl -sL https://github.com/vozlt/nginx-module-vts/archive/v${NGINX_VTS_VERSION}.tar.gz | tar -xz \
  && ls -al /opt/rebuildnginx \
  && ls -al /opt \
  && sed -i -r -e "s/\.\/configure(.*)/.\/configure\1 --add-module=\/opt\/nginx-module-vts-${NGINX_VTS_VERSION}/" /opt/rebuildnginx/nginx-${NGINX_VERSION}/debian/rules \
  && cd /opt/rebuildnginx/nginx-${NGINX_VERSION} \
  && dpkg-buildpackage -b \
  && cd /opt/rebuildnginx \
  && dpkg --install nginx_${NGINX_VERSION}-1~bookworm_amd64.deb \
  && apt-get remove --purge -y dpkg-dev curl && apt-get -y --purge autoremove && rm -rf /var/lib/apt/lists/*


# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy the public folder (src directory) to the Nginx root
COPY src .



# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
