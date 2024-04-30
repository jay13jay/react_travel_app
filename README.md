# Notes

## Create an array of numbers
```js
{Array.from({ length: 20 }, (_, i) => i + 1)

// then you can map it
{Array.from({ length: 20 }, (_, i) => i + 1).map
    ((num) => (
        <option key={num} value={num}>
            {num}
        </option>
    ))}
```

## Deploy to Github Pages
1) Install gh-pages
```bash
npm install gh-pages --save-dev
```
2) Set deploy and pre deploy scripts in package.json
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy" : "npm run build",      // add predeploy script
    "deploy" : "gh-pages -d build"      // add deploy script
```

3) Configure site URL in package.json
```json
    "homepage": "jay13jay.github.io/react_travel_app", // add homepage line above name
    "name": "react_travel_checklist",
    "version": "0.1.0",
    "private": true,
```

4) deploy app
```bash
npm run deploy
```
