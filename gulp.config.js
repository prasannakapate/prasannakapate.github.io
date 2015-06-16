module.exports = function() {
    var client = './app/assets';

    var config = {
        temp: './.temp/',
        /**
         *Files paths
         */
        alljs: ['./src/**/*.js', './*.js'],

        less: client + '/styles/styles.less'
    };

    return config;
};