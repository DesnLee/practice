let listStyle = document.getElementById("itemList")
listAmount = document.getElementById("itemList").children.length


if (listAmount % 3 === 0){

}else{
    listStyle.classList.add("itemAdd");
}