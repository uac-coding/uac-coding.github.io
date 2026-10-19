# UAC Coding Club

Welcome to the official repository for **uac-coding.github.io**, the site for UAC Coding, built using [Nextra](https://nextra.site/) and [Next.js](https://next.js.org/).


## 🚀 Getting Started

### Prerequisites & Node.js Installation

Before getting started, make sure you have Node.js (version 18 or later) and a package manager (**npm**, **yarn**, or **pnpm**) installed.

We strongly recommend using **nvm (Node Version Manager)** to install and manage Node.js.

#### 1. Install `nvm` (macOS / Linux / WSL)

Run the official install script using `curl` or `wget`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash

```

*(After installation, close and reopen your terminal or source your shell profile as instructed by the script).*

#### 2. Install Node.js via `nvm`

Once `nvm` is installed, run the following commands to install and use Node.js version 18 or later (LTS is recommended):

```bash
# Install the latest LTS version of Node.js
nvm install --lts

# Use the installed LTS version
nvm use --lts

```

Verify that the correct versions are active:

```bash
node -v  # Should output v18.x.x or higher
npm -v
```

### Installation

Clone the repository and install the required project dependencies:

```bash
# Clone the repository
git clone https://github.com/uac-coding/uac-coding.github.io.git
cd uac-coding.github.io

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## 🛠️ Local Development

To run the documentation site locally with live reloading:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Previewing the Production Build Locally

Because GitHub Pages serves a static export (typically outputted to an `out` folder), you can test the exact production build locally before deploying to ensure everything looks and behaves correctly:

```bash
# Build the static site
npm run build
# or
yarn build
# or
pnpm build

# Serve the static output folder locally
npx serve out
```

### 🗂️ Table of Contents & Navigation (`_meta.js`)

Nextra uses the `_meta.js` (or `_meta.json`) file located inside your directories to control the sidebar navigation order, titles, and visibility of your pages.

To hide a page from the sidebar navigation while still allowing users to access it via a direct link, set its `display` property to `"hidden"`:

```javascript
export default {
  "week-1": "Week 1",
  "week-2": {
    display: "hidden"
  }
  ...
}
```

## 🔍 Pagefind Search & Hiding Content

Nextra's `display: "hidden"` setting in `_meta.js` hides pages from sidebar navigation, but Pagefind will still index their rendered HTML.

To prevent hidden pages or draft content (e.g., upcoming weekly lessons) from appearing in Pagefind search results, wrap the page content in your MDX file with `<div data-pagefind-ignore>`:

```mdx
<div data-pagefind-ignore>

# Week 2 (Hidden Content)

This page is accessible via direct URL, but its contents will be excluded from search indexing.

</div>
```

## 🚢 Deployment

All site updates and code changes should be made and merged into the **`main`** branch.

When you are ready to push your changes live to production, run the deployment script:

```bash
npm run deploy
# or
yarn deploy
# or
pnpm deploy
```

This command builds the static site and pushes the output to the **`gh-pages`** branch, which automatically publishes and updates the live site at [uac-coding.github.io](https://www.google.com/search?q=https://uac-coding.github.io).
