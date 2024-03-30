/*
Assume you fetching data from an external source with the steps below
1. Connect to external source
2. Fetch the data
3. Use data for your script

but assume that;
connecting takes 5 seconds
fetching takes 3 seconds
processing takes 1 second
*/

function connectToSource(callback) {
    setTimeout(() => {
        console.log(`Connection is set`);
        callback();
    }, 5000);
   

}

function fetchData(callback ) {
setTimeout(() => {
    
    console.log(`Data is retreived`);
    callback();
}, 3000);
}

function useData() {
   setTimeout(() => {
    console.log(`Data`)
   }, 1000);

}
function test () {
    connectToSource(() => {
        fetchData(() => {
            useData();
        }
        )
    }
    )
    
}
 test();
 