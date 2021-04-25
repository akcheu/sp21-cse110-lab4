function printCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var intervalID = setInterval(printCurrentTime, 1000);