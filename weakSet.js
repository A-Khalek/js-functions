// weakset
function log(anything){
    console.log(anything);
}
const myWs = new WeakSet();
myWs.add({a:3});
const ws = new WeakSet([{a:1},{b:2}]);
log(ws);
