let unorderedList = document.querySelector(".navigation");
let menuList = ["banner", "about", "menu", "chefs", "reviews", "contact"];

menuList.forEach(item => {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.setAttribute("href", `#${item}`);
    a.append(document.createTextNode(item === "banner" ? "home" : item));

    li.append(a);
    unorderedList.append(li);
});