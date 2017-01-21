Invalid coverage with babel
===========================

Simple code/test to reproduce a bug with Istanbul and babel-register:
https://github.com/istanbuljs/nyc/issues/501

Running
-------

    git clone https://github.com/freongrr/istanbul-coverage-bug
    cd istanbul-coverage-bug
    npm install

Generate coverage reports using Istanbul and Babel:

    npm run test

Generate coverage reports without Babel:

    npm start test2

Open the `coverage/index.js.html` file to check th result.
