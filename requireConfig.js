/**
 * Created by waf on 11/4/15.
 */
//main.js
require.config({
    paths: {
        //libs
        jquery: "node_modules/jquery/dist/jquery",
        move : "lib/move/move.min"
    }
});

//Activate app
requirejs(['js/main']);