server {
  listen 80;
  server_name 911.ekb.ru;
  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl;
  server_name 911.ekb.ru;

  location / {
    proxy_pass http://localhost:6789/;
  }

  location /assets {
    alias /home/uxm911/uxm911/assets;
  }
}
