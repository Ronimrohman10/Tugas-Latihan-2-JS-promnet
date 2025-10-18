
const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");


form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const nilaiInput = input.value.trim();

  
  if (nilaiInput === "") {
    errorMessage.textContent = "Field Harus diisi!!";
    input.classList.add("invalid");
    input.classList.remove("valid");
    return; 
  }

  
  errorMessage.textContent = "";
  input.classList.remove("invalid");
  input.classList.add("valid");

 
  const itemBaru = document.createElement("li");
  itemBaru.textContent = nilaiInput;

  
  list.appendChild(itemBaru);

  
  input.value = "";
});
