# Setup Guide

## Enabling GitHub Pages

This guide will help you enable GitHub Pages for your about-me-template repository.

### Visual Guide

See the image below for step-by-step instructions:

![How to Enable GitHub Pages](./enable-github-pages.svg)

### Quick Steps

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click on the "Settings" tab

2. **Navigate to Pages Section**
   - In the left sidebar, scroll down and click "Pages"

3. **Configure Source**
   - Under "Build and deployment"
   - Source: Select "GitHub Actions"
   - The workflow file (`.github/workflows/deploy.yml`) will automatically deploy your site on push to the main branch

4. **Wait for Deployment**
   - After the workflow completes successfully, your site will be live at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Additional Information

This repository comes with a pre-configured GitHub Actions workflow that will:
- Build your React application
- Deploy it to GitHub Pages automatically when you push to the main branch

No additional configuration is needed beyond enabling GitHub Pages with "GitHub Actions" as the source.
