module.exports = function reverse(n) {

    let resersed = '';
    n = Math.abs(n);
    while (true) {
        let ost = n % 10;
        if (ost === 0 && n === 0)
            break;
        resersed += String(ost);
        n = Math.trunc(n / 10);
    }
    return parseInt(resersed);

}
