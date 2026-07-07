# Little Lemon Restaurant Website

![Little Lemon](public/little-lemon-banner.png)

## Overview

This project is a website for a fictional restaurant called Little Lemon. It was created to practice the fundamental concepts in HTML and CSS such as using semantic elements, grids, flexboxes, animations, and responsive design. The Little Lemon website consists of four pages:

- Homepage
- Menu
- Reservations
- Contact Us

---

## Navigation Bar

All webpages within the Little Lemon website have a responsive navigation bar. The navigation bar not only contains all the links to each webpage but also includes an animation on the Little Lemon title. When hovering over the Little Lemon text, the title glows and pulses yellow as seen in the gif above.

---

## Pages

### Homepage

The homepage has three main components, an image slider, a photo gallery and a set of action cards. The image slider uses an animation to automatically sequence through a series of images. The photo gallery uses a grid to showcase a set of foods and drinks. The action cards are links to the other remaining pages.

### Menu

The menu page has two main components, a photo gallery and the complete Little Lemon's menu. The photo gallery uses a wrapped flexbox to display images of menu options as well as their descriptions and prices side by side. Below the gallery is the complete menu that is laid out using a grid.

### Reservations

The reservation page is a simple webpage addressing customers to contact Little Lemon during operating hours to reserve a table.

### Contact Us

The contact us page is a simple webpage displaying Little Lemon's phone number, address, and hours of operations, as well as, a form (front-end only) to contact Little Lemon.

---

## Responsiveness

To create a responsive website, media queries were incorporated to format the various webpages differently depending on the screen dimensions. Additionally, to create scalable text, all font-sizes utilized `rem` and scaled the font-size for the `html` element either up or down based on the screen dimensions.

---

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
