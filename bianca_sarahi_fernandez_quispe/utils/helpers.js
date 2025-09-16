async function sleep_3(){
    await sleep(3000);
}

async function sleep_5(){
    await sleep(5000);  
}

async function sleep_10(){
    await sleep(10000);  
}

module.exports = { sleep_3, sleep_5, sleep_10 };