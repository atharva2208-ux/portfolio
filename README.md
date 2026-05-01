# Atharva Kumbhar — Cybersecurity Portfolio

A clean, multi-page cybersecurity portfolio with a hidden admin panel for managing all content without touching code.

---

## 📁 Project Structure

```
ak-portfolio/
├── index.html              ← Main entry point (open this in browser)
├── README.md               ← This file
└── assets/
    ├── favicon.svg         ← Browser tab icon
    ├── css/
    │   └── style.css       ← All styles
    └── js/
        ├── config.js       ← ⭐ YOUR MAIN SETTINGS FILE
        ├── data.js         ← Runtime data store
        ├── render.js       ← Renders portfolio pages
        ├── admin.js        ← Admin panel logic
        └── app.js          ← Page navigation & init
```

---

## 🚀 Running Locally

### Option A — Just open the file (simplest)
1. Download / unzip the project folder
2. Double-click `index.html`
3. It opens directly in your browser — done!

### Option B — Local server (recommended, avoids any browser quirks)

**Using VS Code (recommended for beginners):**
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension (search in Extensions panel)
3. Open the `ak-portfolio` folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. Your browser opens at `http://127.0.0.1:5500`

**Using Python (if installed):**
```bash
cd ak-portfolio
python -m http.server 8080
# Open http://localhost:8080
```

**Using Node.js:**
```bash
npm install -g serve
serve ak-portfolio
# Open the URL shown in terminal
```

---

## 🔐 Admin Panel

**How to open:**  Press `Ctrl + Shift + A` on any page of the site.

**Default credentials:**
- Username: `atharva`
- Password: `ak@secure2025`

> ⚠️ **Change the password before going live!**  
> Open `assets/js/config.js` and update the `admin.password` value.

**What you can manage from the admin panel:**
| Tab | What you can do |
|-----|----------------|
| About | Edit hero stats, subtitle, and bio |
| Projects | Add / Edit / Delete projects |
| Skills | Add / Delete skills and adjust percentages |
| Tools | Add / Delete tools in your arsenal |
| Certs | Add / Delete certifications |
| Socials | Update all contact/social links |

**Saving:** Click **Save All** (top right of admin) to persist changes across browser sessions.

---

## ✏️ Editing Content Without Admin Panel

Open `assets/js/config.js` in any text editor (Notepad, VS Code, etc.) and change the values directly. This is the permanent way to set defaults.

**Examples:**
```js
// Change hero stats
stats: {
  ctf:  '20+',   // ← change this
  proj: '12+',
  cve:  '5+'
},

// Add a project
projects: [
  {
    id: 7, icon: '🕵️',
    title: 'My New Project',
    desc: 'What this project does.',
    tags: 'c:Python, b:Network',
    gh: 'https://github.com/you/project',
    demo: ''
  },
  // ... existing projects
],

// Update social links
socials: [
  { id: 'email', label: 'Email Me', icon: '✉', url: 'mailto:you@gmail.com' },
  { id: 'github', label: 'GitHub', icon: '⌥', url: 'https://github.com/yourname' },
]
```

---

## 🌐 Deploying Online (Free)

### Method 1 — GitHub Pages (100% free, no account needed for Netlify)

#### Step 1: Create a GitHub account
1. Go to [github.com](https://github.com) → Sign Up
2. Verify your email

#### Step 2: Create a new repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `portfolio` (or any name you like)
3. Set visibility to **Public**
4. ✅ Check "Add a README file"
5. Click **Create repository**

#### Step 3: Upload your files
1. In your new repo, click **Add file → Upload files**
2. Drag and drop ALL files and the `assets/` folder
3. In "Commit changes", write: `Initial portfolio upload`
4. Click **Commit changes**

> ⚠️ Make sure `index.html` is at the **root** of the repo (not inside a subfolder).

#### Step 4: Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Branch: `main` | Folder: `/ (root)`
5. Click **Save**
6. Wait ~2 minutes, then your site is live at:  
   `https://YOUR-USERNAME.github.io/portfolio`

---

### Method 2 — Netlify (even easier, drag & drop!)

#### Step 1: Go to Netlify
1. Visit [netlify.com](https://netlify.com) → **Sign Up** (free)
2. Sign up with your GitHub account (easiest)

#### Step 2: Deploy by drag & drop
1. On the Netlify dashboard, scroll down to the **"Want to deploy a new site without connecting to Git?"** section
2. Drag your entire `ak-portfolio` folder into the drop zone
3. Netlify builds and deploys in ~30 seconds
4. You get a live URL like: `https://random-name-12345.netlify.app`

#### Step 3 (optional): Connect to GitHub for auto-deploy
1. In Netlify dashboard → **Add new site → Import an existing project**
2. Choose **GitHub** → Select your portfolio repo
3. Build settings: leave blank (static site)
4. Click **Deploy site**
5. Now every time you push changes to GitHub, your site updates automatically!

#### Rename your Netlify URL
1. Site settings → **Domain management → Options → Edit site name**
2. Change to: `atharvakumbhar` → your site becomes `atharvakumbhar.netlify.app`

---

## 🌍 Custom Domain Setup

### Free subdomain (no cost)
- GitHub Pages: `yourusername.github.io/portfolio`
- Netlify: `yourname.netlify.app`

### Paid custom domain (e.g. `atharvakumbhar.com`)
1. Buy a domain (~₹800–1500/year) from:
   - [GoDaddy](https://godaddy.com)
   - [Namecheap](https://namecheap.com) ← cheapest
   - [Google Domains](https://domains.google)
2. In Netlify → Site settings → Domain management → **Add custom domain**
3. Enter your domain (e.g. `atharvakumbhar.com`)
4. Netlify shows you DNS records to add
5. Log into your domain registrar → DNS settings → Add those records
6. Wait 10–30 minutes for DNS to propagate
7. ✅ Your site is live on your own domain + Netlify gives you **free HTTPS**!

---

## 🔄 Updating the Site Later

### Quick text/content changes:
1. Open `assets/js/config.js` in VS Code or Notepad
2. Change whatever you need
3. Save the file

### If deployed on GitHub:
1. Go to your GitHub repo
2. Click the file you edited → pencil icon (Edit)
3. Make your change → Commit
4. Site updates in ~1 minute automatically

### If deployed on Netlify (drag & drop method):
1. Make changes locally
2. Go to Netlify → **Deploys** tab → drag the updated folder again

### Using the Admin Panel (easiest):
1. Press `Ctrl + Shift + A` on your live site
2. Make changes
3. Click **Save All**
> Note: Admin panel saves to browser localStorage — changes persist in YOUR browser. To make changes permanent for everyone, also edit `config.js` and redeploy.

---

## 🎨 Changing Colors / Styling

Open `assets/css/style.css` and find the `:root` block at the top:

```css
:root {
  --cyan:  #00f5d4;   ← main accent color
  --blue:  #0077ff;   ← secondary accent
  --red:   #ff2e5b;   ← danger/red team tags
  --amber: #ffb700;   ← warning/amber tags
  --bg:    #050a0f;   ← background color
}
```

Change any hex code to change the site's color scheme.

---

## ❓ FAQ

**Q: Why don't admin changes persist after refresh on other devices?**  
A: The admin panel saves to your browser's localStorage — it's per-device. For permanent changes visible to everyone, edit `config.js` and redeploy.

**Q: Can I add my own photo?**  
A: Yes! Add your image to the `assets/` folder and add an `<img>` tag in the About section of `index.html`.

**Q: How do I add more pages?**  
A: Copy an existing `<div class="page" id="page-...">` block in `index.html`, give it a new ID, add a nav link, and call `navigate('newpage')` from anywhere.

---

Made with 💚 for Atharva Kumbhar's Cybersecurity Portfolio
