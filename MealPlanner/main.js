function lists()
{
    document.getElementById("lists").innerHTML = "<ul class=\"nav justify-content-evenly\">\n" +
        "    <li class=\"nav-item\">\n" +
        "            <p>Breakfast: </p>\n" +
        "        </li>\n" +
        "        <li class=\"nav-item\">\n" +
        "            <button data-bs-toggle='modal' data-bs-target='#add-recipe-modal' class='add_button bg-dark text-white'>Add</button>\n" +
        "        </li>\n" +

        "    </ul>\n" +
        "    <br>\n" +
        "    <ul class=\"nav justify-content-evenly\">\n" +
        "        <li class=\"nav-item\">\n" +
        "            <p>Lunch: </p>\n" +
        "        </li>\n" +
        "        <li class=\"nav-item\">\n" +
        "            <button data-bs-toggle='modal' data-bs-target='#add-recipe-modal' class='add_button bg-dark text-white'>Add</button>\n" +
        "        </li>\n" +
        "    </ul>\n" +
        "    <br>\n" +
        "    <ul class=\"nav justify-content-evenly\">\n" +
        "        <li class=\"nav-item\">\n" +
        "            <p>Dinner: </p>\n" +
        "        </li>\n" +
        "        <li class=\"nav-item\">\n" +
        "            <button data-bs-toggle='modal' data-bs-target='#add-recipe-modal' class='add_button bg-dark text-white'>Add</button>\n" +
        "        </li>\n" +
        "    </ul>"
}


function mondayPlanner() {
    document.getElementById("day").innerHTML = "<b>Monday</b>";
    lists();
}

function tuesdayPlanner() {
    document.getElementById("day").innerHTML = "<b>Tuesday</b>";
    lists();
}

function wednesdayPlanner() {
    document.getElementById("day").innerHTML = "<b>Wednesday</b>";
    lists();
}

function thursdayPlanner() {
    document.getElementById("day").innerHTML = "<b>Thursday</b>";
    lists();
}

function fridayPlanner() {
    document.getElementById("day").innerHTML = "<b>Friday</b>";
    lists();
}

function saturdayPlanner() {
    document.getElementById("day").innerHTML = "<b>Saturday</b>";
    lists();
}

function sundayPlanner() {
    document.getElementById("day").innerHTML = "<b>Sunday</b>";
    lists();
}

function recipeAdded() {
    alert("The chosen recipe gets added to the selected list.");
}

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
function search1(){
    let input = document.getElementById("recipe-name1");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("recipe-list-modal1");
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