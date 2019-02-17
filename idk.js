function square(x) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(Math.pow(x, 2));
        }, 2000);
    });
}

async function layer(x)
{
    const value = await square(x);
    console.log(value);
}

layer(10);