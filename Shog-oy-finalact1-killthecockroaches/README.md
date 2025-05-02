# Kill the Cockroaches – PWA Game

**Live Demo**: [Play Now](https://codexcancerion.github.io/Marafo-finalact1-killthecockroaches/)

A fast-paced, bug-busting Progressive Web App where you squash cockroaches with a slipper-themed cursor. Playable offline, installable on your device, and powered by vanilla web technologies.

---

## Table of Contents

* [Features](#features)
* [Live Access](#live-access)
* [Installation](#installation)
* [How to Play](#how-to-play)
* [Technologies Used](#technologies-used)
* [Folder Structure](#folder-structure)
* [Gameplay Mechanics](#gameplay-mechanics)
* [Future Enhancements](#future-enhancements)
* [License](#license)

---

## Features

* **Live Web Access** – Available anytime via GitHub Pages
* **Mute/Unmute Audio** – Toggle background music and kill effects
* **Timer** – Track session duration
* **Kill Counter** – Shows how many cockroaches you've squashed
* **Offline Support** – Fully functional even without internet
* **Increasing Spawn Rate** – Game gets harder every 10 seconds
* **Slipper Pointer** – Your cursor becomes a weapon
* **Background Music** – Immersive looped audio
* **Sound Effects** – Satisfying squish when roaches fall
* **Death Sprite Animation** – Cockroaches visually "die" when clicked

---

## Live Access

> **URL**: [https://codexcancerion.github.io/Marafo-finalact1-killthecockroaches/](https://codexcancerion.github.io/Marafo-finalact1-killthecockroaches/)

No install needed – just open in your browser and play instantly!

---

## Installation (Optional PWA)

1. Open the game URL in Chrome, Edge, or any PWA-supported browser.
2. Click the **Install** prompt in the address bar.
3. Game installs to your home screen or desktop like a native app.
4. Play offline with full functionality!

---

## How to Play

* **Start Squashing**: Click on cockroaches before they escape.
* **Watch the Clock**: The spawn rate increases every 10 seconds.
* **Toggle Sound**: Use the mute/unmute button to control audio.
* **Track Stats**: Check your timer and kill count at the top.
* **No Internet? No Problem**: The game will still run if you're offline.

---

## Technologies Used

* **HTML5**, **CSS3**, **Vanilla JavaScript**
* **Progressive Web App** (manifest + optional service worker)
* **Web Audio API** for music and squish SFX
* **Offline Detection API** (`navigator.onLine`)
* **CSS Custom Cursor**

---

## Folder Structure

```
/
├── index.html              # Game interface and logic
├── manifest.json           # Web app manifest for PWA features
├── assets/
│   ├── icon-192.png        # Icon for installability
│   ├── icon-512.png
│   ├── cockroach.png       # Alive sprite
│   ├── dead-roach.png      # Dead sprite
│   ├── slipper-cursor.png  # Cursor image
│   ├── music.mp3           # Background music
│   └── squish.mp3          # Kill SFX
```

> **Note**: If offline support isn't working yet, adding a `sw.js` service worker can make it installable and cache assets.

---

## Gameplay Mechanics

* **Spawn Rate Timer**: Every 10 seconds, more cockroaches spawn per interval.
* **Click Detection**: On mouse click, check if the target is a cockroach.
* **Kill Feedback**:

  * Play `squish.mp3`
  * Replace image with `dead-roach.png`
  * Update the kill count
* **Cursor Styling**:

```css
body {
  cursor: url('./assets/slipper-cursor.png'), auto;
}
```

* **Offline Warning**:

```js
window.addEventListener('offline', () => {
  alert("You're offline. Game will still run.");
});
```

---

## Future Enhancements

* Add mobile touch support
* Leaderboard via localStorage or Firebase
* Cockroach animation and random movement
* Level-up system
* Sound and music volume sliders
* Game over screen and restart button

---

