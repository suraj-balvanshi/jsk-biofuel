# 🌐 Connecting Vercel Deployment with a Hostinger Domain

This guide explains how to deploy a project on Vercel and connect it to a custom domain managed by Hostinger.

---

## ✅ Step 1: Deploy Your Project to Vercel

1. Push your project to GitHub, GitLab, or Bitbucket.
2. Go to [https://vercel.com](https://vercel.com) and sign in.
3. Click **"New Project"**, then import your repository.
4. Follow the steps to configure and deploy your project.
5. After deployment, your project will be available at `your-project.vercel.app`.

---

## ✅ Step 2: Add Your Custom Domain in Vercel

1. Go to your project’s dashboard on Vercel.
2. Navigate to **Settings → Domains**.
3. Click **"Add"** and enter your domain name (e.g., `yourdomain.com`).
4. Click **"Continue"** to proceed.

---

## ✅ Step 3: Configure DNS Settings in Hostinger

1. Log in to your Hostinger account at [https://hpanel.hostinger.com/](https://hpanel.hostinger.com/).
2. Go to **Domains → DNS Zone Editor** or **Manage DNS**.
3. Add the following DNS records:

### ➤ CNAME Record (for www)
| Type | Name | Value                  | TTL   |
|------|------|------------------------|--------|
| CNAME | www  | cname.vercel-dns.com   | Default or 3600 |

### ➤ A Record (for root domain)
| Type | Name | Value        | TTL   |
|------|------|--------------|--------|
| A    | @    | 76.76.21.21  | Default or 3600 |

> 🔄 Note: DNS changes may take a few minutes up to 24 hours to propagate.

---

## ✅ Step 4: Verify the Domain in Vercel

1. Go back to **Vercel → Settings → Domains**.
2. Click **"Verify"** next to your domain.
3. Once verification is successful, your domain will be live with your Vercel deployment.

---

## 🔐 Optional: Enforce HTTPS

- In your Vercel project → **Settings → Domains**, toggle **"Enforce HTTPS"** to ON.

---

## ✅ Done!

Your custom domain managed by Hostinger is now connected to your Vercel deployment!
