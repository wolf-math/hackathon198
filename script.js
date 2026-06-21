console.log('testing');
console.log("Don't leave console logs in production code!");
const heading = document.getElementById('heading');
// @ts-ignore
heading.innerText = 'Bigfoot was here';

const apiKey = window.CONFIG.API_KEY;
console.log(apiKey);
