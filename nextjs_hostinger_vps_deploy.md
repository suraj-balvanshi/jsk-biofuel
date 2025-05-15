# Deploying a Full Next.js App with Node.js on Hostinger VPS

## Overview

This guide walks through deploying a fully optimized Next.js application (with server-side rendering and image optimization) on a Hostinger VPS using Node.js, PM2, and Nginx.

---

## Prerequisites

- Hostinger VPS with root SSH access
- A domain name pointing to your VPS (via A record)
- Basic Linux command line knowledge

---

## Step 1: Connect to VPS via SSH

```bash
ssh root@<hostinger-vps-ip>
```

---

## Step 2: Install Node.js and PM2

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
npm install -g pm2
```

---

## Step 3: Upload Your Next.js App

```bash
git clone https://github.com/suraj-balvanshi/jsk-biofuel.git
cd jsk-biofuel
```

---

## Step 4: Set Up Environment Variables

Before building your Next.js app, ensure that your environment variables are properly configured. Create a `.env` file in the root of your project and add your variables:

```bash
nano .env
```

Add your environment variables in the following format:

```env
SMTP_HOST="smtp.hostinger.com"
SMTP_USER="info@jskbiofuel.com"
SMTP_PASS="<email password>"
```

---

## Step 5: Build and Start the App

Ensure your environment variables are loaded before building and starting the app. Use the following commands:

```bash
npm install
npm run build
npm run start # optional test
pm2 start npm --name "next-app" -- start --env production
pm2 save
```

---

## Step 6: Configure Nginx as Reverse Proxy

### Create a new config file

```bash
sudo nano /etc/nginx/sites-available/next-app
```

### Paste the following config:

```nginx
server {
    listen 80;
    server_name jskbiofuel.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Enable the config and restart Nginx

```bash
sudo ln -s /etc/nginx/sites-available/next-app /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

---

## Step 7: Enable HTTPS with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx
```

Follow the prompts to set up SSL for your domain.

---

## Step 8: Test Your Deployment

- Open your browser and navigate to `http://jskbiofuel.com`
- Confirm that dynamic routes, image optimization, and API routes work

---

## Notes

- Ensure `output: "export"` is **not** set in `next.config.js`
- Image optimization and SSR require a running Node.js server — not supported with `next export`

---

## Notes on Environment Variables

- Next.js automatically loads variables from `.env` files during build and runtime.
- Use `NEXT_PUBLIC_` prefix for variables that need to be exposed to the browser.
- For sensitive variables, ensure they are only accessed server-side.

---

## Commands Summary

```bash
# Connect to server
ssh root@<your-server-ip>

# Install dependencies
sudo apt install -y nodejs nginx
npm install -g pm2

# Clone/build app
git clone <your-repo>
cd <your-repo>

# Set up environment variables
nano .env

SMTP_HOST="smtp.hostinger.com"
SMTP_USER="info@jskbiofuel.com"
SMTP_PASS="<email password>"

# Install dependencies and build app
npm install
npm run build
pm2 start npm --name "next-app" -- start

# Configure Nginx
sudo nano /etc/nginx/sites-available/next-app

server {
    listen 80;
    server_name jskbiofuel.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


sudo ln -s /etc/nginx/sites-available/next-app /etc/nginx/sites-enabled/
sudo systemctl restart nginx

# Enable SSL (optional)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx
```

---

## References

- [Next.js Docs](https://nextjs.org/docs/deployment)
- [PM2 Docs](https://pm2.keymetrics.io/)
- [Certbot Docs](https://certbot.eff.org/)
