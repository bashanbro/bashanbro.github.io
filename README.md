# Bashan Lab · 巴山学长的数字实验室

**Website:** https://bashanbro.github.io/

A personal website featuring mathematical computing, numerical optimization, computer vision, engineering simulation, open-source software, and creative coding.

## Sections

| Section | Description |
| --- | --- |
| Research | Numerical optimization, UAV vision, precision engineering and creative computing |
| Projects | Links to verified public GitHub repositories |
| Playground | Interactive Fourier series and full bashanClock |
| Field Notes | Research topics being prepared for articles |
| About | Introduction and GitHub links |

## Features

- Responsive design for desktop, tablet and mobile
- Simplified Chinese / English interface
- Dark / light themes with browser preference persistence
- Filterable, real GitHub project gallery
- Interactive Fourier harmonic plot with adjustable number of terms
- Original mathematical harmonic clock preserved at /playground/bashan-clock/
- Keyboard-accessible controls and reduced-motion support
- No build step, backend, or package installation

## Structure

    index.html                        Bashan Lab homepage
    README.md                         Project documentation
    index.md                          Legacy MATLAB notes, preserved
    assets/site.css                   Responsive styles and themes
    assets/site.js                    Translation, filters and visualization
    assets/favicon.svg               Site mark
    playground/bashan-clock/index.html  Original bashanClock

## Local testing

Run `python -m http.server 8000` from the repository root and visit `http://localhost:8000/`.

## Deploy with GitHub Pages

1. Open Settings → Pages in this repository.
2. Choose Deploy from a branch.
3. Choose main and /(root), then Save.
4. Open https://bashanbro.github.io/ after the build completes.

**Visibility:** During development the repository was private. Standard GitHub Pages personal-site hosting may require a public repository depending on account/plan. Review the repository and make it public if you intend to publish the source.

## Public project repositories

- [bashanClock](https://github.com/bashanbro/bashanClock)
- [PlotHub](https://github.com/bashanbro/plothub)
- [TaiChiClock](https://github.com/bashanbro/TaiChiClock)
- [Multiple Precision Toolbox](https://github.com/bashanbro/MultiplePrecisionToolbox)
- [Password Generator](https://github.com/bashanbro/passwordgenerator)
- [Arrow Puzzle Escape](https://github.com/bashanbro/arrowPuzzleEscape)

Active research topics are clearly labeled and not represented as completed releases or verified benchmarks.

## Updating

- Edit homepage sections in index.html.
- Edit translations, gallery filters and waveform in assets/site.js.
- Edit styling and breakpoints in assets/site.css.
- Edit the clock in playground/bashan-clock/index.html.
- Do not commit account credentials, MFA secrets, tokens, private datasets or model weights.

## License

Linked projects keep their respective original licenses. No blanket license is granted for original Bashan Lab website source or art.

---

Bashan Lab — Mathematics as a language. Engineering as a practice.