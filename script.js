document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("create-list");
    let createListBtn = document.getElementById("create-list-btn");
    let addRecipeBtn = document.getElementsByClassName("add-recipe");
    let myModal = new bootstrap.Modal(document.getElementById("add-list-modal"));
    let recipeModal = new bootstrap.Modal(document.getElementById("add-recipe-modal"));

    let deleteBtn = document.getElementsByClassName("fa-trash");
    let listItemCount = 3;
    addListenerToAddRecipe();
    addListenerToDelete();
    addListenerToLists();
    search();
    btn.addEventListener("click", function () {
        myModal.show();
    });

    createListBtn.addEventListener("click", function () {
        let listName = document.getElementById("list-name").value;
        let list = document.getElementById("add-list");
        let listItem = document.createElement('button');
        listItem.setAttribute("type", "button");
        listItem.classList.add("btn");
        listItem.classList.add("btn-primary");
        listItem.id = "list-" + ++listItemCount;
        listItem.innerHTML = listName + " &emsp;<i class=\"fa-solid fa-trash\"></i>";

        list.appendChild(listItem);

        let recipeList = document.createElement("div");
        recipeList.classList.add("input-group");
        recipeList.classList.add("mb-3");
        recipeList.innerHTML = " <button type=\"button\" class=\"btn btn-outline-primary add-recipe\" style='width: 100%'> Add a new recipe to this list&emsp;<i class=\"fa-solid fa-plus\"></i> </button>  <a class=\"recipe-link\" href=\"recipe.html\">\n" +
            "                    <div class=\"card mb-3\">\n" +
            "                        <div class=\"row g-0 card-row\">\n" +
            "                            <div class=\"col-4 card-image\">\n" +
            "                                <img src=\"assets/images/pancake.jpg\" class=\"img-fluid rounded-start\">\n" +
            "                            </div>\n" +
            "                            <div class=\"col-8\">\n" +
            "                                <div class=\"card-body card-content\">\n" +
            "                                    <h5 class=\"card-title\">Pancake</h5>\n" +
            "                                    <p class=\"card-text\">Pancakes are a type of flatbread prepared from a batter that is baked on a hot griddle or frying pan. They exist in several variations in many different local cuisines.</p>\n" +
            "                                    <p class=\"card-text\"><small><b>Cook Time:</b> 15 minutes</small></p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    </a>" +
            "<a class=\"recipe-link\" href=\"recipe.html\">\n" +
            "                    <div class=\"card mb-3\">\n" +
            "                        <div class=\"row g-0 card-row\">\n" +
            "                            <div class=\"col-4 card-image\">\n" +
            "                                <img src=\"assets/images/pizza.jpg\" class=\"img-fluid rounded-start\">\n" +
            "                            </div>\n" +
            "                            <div class=\"col-8\">\n" +
            "                                <div class=\"card-body card-content\">\n" +
            "                                    <h5 class=\"card-title\">Pizza</h5>\n" +
            "                                    <p class=\"card-text\">Pizza generally consists of a crust covered in sauce, layered with toppings and finally with a layer of cheese on top.</p>\n" +
            "                                    <p class=\"card-text\"><small><b>Cook Time:</b> 1 hour</small></p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    </a>";


        recipeList.id = "recipe-list-" + listItemCount;

        let allRecipeList = document.getElementById("all-recipe-list");

        allRecipeList.appendChild(recipeList);
        addListenerToAddRecipe();
        search();
        addListenerToDelete();
        addListenerToLists();
        myModal.hide();





    });
    function addListenerToDelete() {
        Array.from(deleteBtn).forEach(el => {
            el.onclick = () => remove(el)
        })
    }

    function remove(e) {
        e.parentElement.remove();
    }

    function addListenerToLists(){
        for (let i = 1; i <= listItemCount; i++) {
            let listBtn = document.getElementById("list-" + i);
            listBtn.onclick = () => showList(i);
        }
    }

    function showList(i){
        let list = document.getElementById("recipe-list-" + i);
        for (let j = 0; j <= listItemCount; j++ && j != i) {
            let recipe = document.getElementById("recipe-list-" + j);
            recipe.style.display = "none";
        }
        list.style.display = "flex";
    }

    function addListenerToAddRecipe() {
        Array.from(addRecipeBtn).forEach(e1 => {
            e1.addEventListener("click", function () {
                recipeModal.show();
            });
        });
    }
});

function search(){
    let input = document.getElementById("recipe-name");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("recipe-list-modal");
    let li = ul.getElementsByClassName("modal-card");
    li = Array.prototype.slice.call(li);

    let txtValue;
    let h5;
    for (let i = 0; i < li.length; i++) {
        h5 = li[i].getElementsByTagName("h5")[0];
        txtValue = h5.innerText || h5.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function search2(){
    let recipeModal = new bootstrap.Modal(document.getElementById("add-recipe-modal"));
    recipeModal.show();
    search();
}

function recipeAdded() {
    alert("The chosen recipe gets added to the selected list.");
    let recipeModal = new bootstrap.Modal(document.getElementById("add-recipe-modal"));
    recipeModal.hide();

}