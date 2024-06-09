let fruits = ["Apple", "Pineapple", "Strawberry", "orange" ,"Blueberry"];

for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    let li = document.createElement("li");
    let img = document.createElement("img");
    // let fruitText = document.createTextNode(fruit);
    img.src = "images/" + fruit + ".png";
    img.alt = fruit;
    li.appendChild(img);
    // li.appendChild(fruitText);
    let ul = document.getElementById("List")
   ul.appendChild(li);
}


