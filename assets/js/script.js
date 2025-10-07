// scripts.js

let bookTitle = "";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("greet").style.display = "block";
});

function closeGreet() {
  document.getElementById("greet").style.display = "none";
  document.getElementById("bouquet").style.display = "block";
}

function closeBouquet() {
  document.getElementById("bouquet").style.display = "none";
  document.getElementById("main").style.display = "block";
}

function goToCart() {
  const input = document.getElementById("bookName").value.trim();
  if (input === "") {
    alert("Please enter a book name!");
    return;
  }
  bookTitle = input;
  document.getElementById("main").style.display = "none";
  document.getElementById("cartPage").style.display = "block";
}

function closeCart() {
  document.getElementById("cartPage").style.display = "none";
  document.getElementById("receipt").style.display = "block";

  const bookName = document.getElementById("bookName").value || "Unknown Title";
  document.getElementById("bookTitle").textContent = bookName;

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB'); // DD/MM/YYYY
  document.getElementById("receiptDate").textContent = formattedDate;

  const transactionID = "#BRD" + Math.floor(Math.random() * 90000 + 10000);
  document.getElementById("transactionId").textContent = transactionID;
}