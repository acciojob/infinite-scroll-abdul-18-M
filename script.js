//your code here!
const lists = document.querySelector("#infi-list");

let count = 1

function addItems(){
for(let i = 0;i<10;i++){
	const li = document.createElement("li");
	li.innerHTML = `List Item ${count}`
	lists.appendChild(li);
	count++;
}
}
addItems(10);

lists.addEventListener("scroll", () => {
    if (lists.scrollTop + lists.clientHeight >= lists.scrollHeight) {
        addItems();
    }
});

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addItems();
    }
});