FROM nginx:1.19

# https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-18-04
# KEEP dhparam AS FIRST COMMAND -- IT TAKES 30+++ MINUTES
RUN openssl dhparam -out /etc/nginx/dhparam.pem 4096

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /etc/ssl/private/privkey.pem -out /etc/ssl/certs/fullchain.pem \
  -subj "/C=US/ST=State/L=Locality/O=Org Name/OU=Org Unit Name/CN=utreviews.com"
#COPY nginx.conf /etc/nginx

#/conf.d/default.conf
