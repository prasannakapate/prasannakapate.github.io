module.exports = function() {
    var client = './app/assets';

    var config = {
        temp: './.temp/',
        /**
         *Files paths
         */

        //all js to vet
        alljs: ['./app/**/*.js'],

        less: ['./src/client/styles/styles.less']
    };

    return config;
};