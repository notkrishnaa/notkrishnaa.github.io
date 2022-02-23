const productContainers = [...document.querySelectoreAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerdimensions = item.getBoundingClientReact();
    let containerdimensions.width = containerdimensions.width;

    nxtBtn[i].addEventListener('click',() => {
        item.scrollleft += containerwidth;
    })

    preBtn[i].addEventListener('click',() => {
        item.scrollleft -= containerwidth;
})