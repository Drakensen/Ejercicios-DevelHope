/* Write a function called printAsyncName, which takes a callback and a string(which will be name) as parameters. 
The callback function will simply print "Hello". The printAsyncName function will have to execute the callback function
after an interval of 1 second. After an interval of 2 seconds, we must print the name that we take as a parameter. */

function printAsyncName (callback) {
    setInterval(() => {
        callback();
    },1000)
}