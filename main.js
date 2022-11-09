
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
    
    e.preventDefault();

    const cost = document.getElementById("cost").value;
    const description = document.getElementById("movie").value;
    // const name = document.getElementsById("selectList").value;
    const category = document.getElementById("selectList").value;
    if (description.length > 0 && cost.length) {
    const object = {
    cost : cost,
    description: description,   
    category: category,
    };
    
    localStorage.setItem("Expense" + description,  JSON.stringify(object));
    addNewLineElement(object);
 }
});

var keys = Object.keys(localStorage),
  i = keys.length; 
  let stringifiedExpense, detailsOfExpense;

  Object.keys(localStorage).forEach((key) => {
    if (key.match(/Expense/g)) {
      stringifiedExpense = localStorage.getItem(key);
      console.log("stringifiedExpense", stringifiedExpense);
      detailsOfExpense = JSON.parse(stringifiedExpense);
      console.log("Expense :", detailsOfExpense);
      addNewLineElement(detailsOfExpense);
    }
  });

function addNewLineElement(object) {
    const ul = document.getElementById("ExpenseItem");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode( object.cost + " " + object.description + " " + object.category + " ")
    );
    // console.log(document.createElement("i"));
    const vr = document.createElement("input");
    vr.id = "ExpenseBtn";
    vr.type = "button";
    vr.value = "Edit Expense";
    vr.addEventListener("click", () => {
    //   console.log(object);
      document.getElementById("cost").value = object.cost;
      document.getElementById("movie").value = object.description;
    //   document.getElementById("category").value = object.category;
      li.remove();
    });
    
    // console.log(vr);
    li.appendChild(vr);
  
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = "Delete Expense";
    btn.addEventListener("click", () => {
      localStorage.removeItem("Expense" + object.description);
      li.remove();
    });
    // console.log(a);
    li.appendChild(btn);
    // console.log(li);
    ul.appendChild(li);
  }
  