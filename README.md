This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `src/shared/hack.js`

`osmtogeojson` expect the data provided to be an instance of `XMLDocument`. The data is obtained
in xml format and turned into `XMLDocument` using `DOMParser().parseFromString` which works perfectly
within browser, but it's behaviour is not replicated correctly in JSDom, used by Jest. To tackle that issue
alternative lib has been introduced to unify the behavior of `DOMParser` between those two environments and `osmtogeojson`
functionality has been copied from `node_modules/osmtogeojson/index.js` over into the `src/shared/hack.js` file with
changed if-condition to allow non-XMLDocument objects to be used.

diff:

```
- if ( ((typeof XMLDocument !== "undefined") && data instanceof XMLDocument ||
* if ( ((typeof XMLDocument !== "undefined") && data.childNodes != null ||
```
