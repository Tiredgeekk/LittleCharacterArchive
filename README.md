# The Little Character Library

A whimsical, maximalist scrapbook-style character archive built with plain HTML, CSS, and JavaScript. It is designed for GitHub Pages.

## Files and folders

- `index.html` — the homepage / library shelves.
- `characters/character-template.html` — duplicate this for every character.
- `css/style.css` — shared design and layout.
- `js/archive.js` — the homepage character list, search, and filters.
- `assets/characters/` — put character images here.
- `assets/decorations/` — optional decorative images and textures.

## Add a character

1. Open `characters/character-template.html`.
2. Make a copy and rename it, for example `rai-kiah.html`.
3. Replace the `INSERT ...` placeholders in the new file.
4. Put that character's images in a folder inside `assets/characters/`, for example:
   `assets/characters/rai-kiah/headshot.jpg`
5. Update image paths in the character page. Character pages live one folder below the homepage, so their image paths begin with `../assets/...`.
6. In `js/archive.js`, copy the example character object and add a new object to the `characters` array. Set its `page` to `characters/rai-kiah.html`.
7. Save and refresh the homepage.

### Character object example

```js
{
  name: "Rai'kiah Amaretto",
  subtitle: "A little tagline goes here.",
  category: "dnd",
  species: "Tiefling / Orc",
  page: "characters/rai-kiah.html",
  image: "assets/characters/rai-kiah/headshot.jpg",
  accent: "#b77d83",
  paper: "#ead8d1"
}
```

Categories currently supported by the homepage filters:
- `original`
- `dnd`
- `fandom`

You can add more categories by adding another filter button in `index.html`.

## Give each character their own colour palette

At the top of each character page, find the `<body class="character-page" ...>` element. Change these six values:

- `--character-paper`: main paper colour.
- `--character-light`: lighter paper for cards.
- `--character-accent`: main accent (headings, bars, decorations).
- `--character-accent-soft`: pale accent (labels and tags).
- `--character-ink`: main text colour.
- `--character-muted`: softer text colour.

The homepage card has its own `accent` and `paper` values in `js/archive.js`.

## Change the stats

The stat bars are ordinary HTML. Change the label, the visible number, and the percentage in `--stat-value`. Keep the percentage between `0%` and `100%`.

For example, for a value of 72:
- Change `--stat-value: 50%` to `--stat-value: 72%`.
- Change the text `50/100` to `72/100`.

## Publish with GitHub Pages

1. Create a new GitHub repository. A name like `little-character-library` works nicely.
2. Upload the contents of this folder to the repository's root (so `index.html` is at the top level).
3. Open the repository's **Settings**.
4. Choose **Pages** in the sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your `main` branch and `/ (root)` folder, then save.
7. GitHub will provide your website address in the Pages section after it builds.

## A few notes

- This project uses no frameworks or build tools. You can edit the files with GitHub's web editor or a code editor.
- Use image files you own or have permission to display. Large images can make the website slow, so resize very large artwork before uploading.
- The template includes image placeholders. Replace the example paths with your own files.
- If you rename folders or files, update the links that point to them.
