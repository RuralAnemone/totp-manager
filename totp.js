

function totpCode(key, currentTimestamp, initialTimestamp, interval, hashFunction, length) {
    const counter = Math.floor((currentTimestamp - initialTimestamp) / interval);
    return hotpCode(key, counter, hashFunction);
}

function hotpCode(key, counter, hashFunction, length) {

}