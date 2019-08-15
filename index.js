const server = require('./server');

const port = process.env.PORT || 5500;

server.listen(PORT, () =>
    console.log(`\n** Server running on port ${PORT} **\n`)
);
