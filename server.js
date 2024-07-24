const express = require('express');
const { renderToString } = require('react-dom/server');
const { Helmet } = require('react-helmet');
const { StaticRouter } = require('react-router-dom/server');
const path = require('path');
const fs = require('fs');
const React = require('react');
const App = require('./src/App').default; // Adjust the path to your App component

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
    const context = {};
    const appString = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const helmet = Helmet.renderStatic();
    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data
                .replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
                .replace('</head>', `${helmet.title.toString()}${helmet.meta.toString()}</head>`)
        );
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
