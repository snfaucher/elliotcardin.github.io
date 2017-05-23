import React, {Component, PropTypes} from 'react';
import {renderToString} from 'react-dom/server'


class App extends Component {
    render() {
        return (
            <h1>React works 123</h1>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <h1>React works Home</h1>
        );
    }
}

const indexHtml =  renderToString(
    <App />
);
const homeHtml = renderToString(
    <Home />
);

export default (data) => {
    return {
        '/': renderFullPage(indexHtml, {}),
        '/home': renderFullPage(homeHtml, {})
    };
};

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Elliot Cardin</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/index.js"></script>
      </body>
    </html>
    `
}