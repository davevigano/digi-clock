# digi-clock

A simple, aesthetic digital clock for the browser, built with vanilla HTML, CSS, and JavaScript.

**[Live demo](https://davevigano.github.io/digi-clock/)**

## Features

- Live clock (HH:MM:SS) and date, updated every second
- Switchable backgrounds via the side menu: Mountain, Sky, Forest, City, Sea, Mojave, W. XP
- No build step, no dependencies beyond Google Fonts and Font Awesome (loaded via CDN)

## Running locally

This is a static site — no build tools or package manager required. Just serve the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Opening `index.html` directly (`file://`) also works.

## Tech stack

- HTML5 / CSS3
- Vanilla JavaScript (no frameworks)
- [Poppins](https://fonts.google.com/specimen/Poppins) font
- [Font Awesome](https://fontawesome.com/) icons

## License

MIT — see [LICENSE](LICENSE).
