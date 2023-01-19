let burger = document.getElementById("burger");
let SideBar = document.getElementById("sideBar");
let nav = document.getElementById("nav");
let container = document.getElementById("container");
let DashBoardDiv = document.getElementById("DashBoardDiv");
let DashBoardDiv1 = DashBoardDiv;
let count = 0;
burger.addEventListener("click", () => {
  if (count == 0) {
    SideBar.style.width = "20%";

    nav.style.width = "80%";
    count++;
  } else {
    SideBar.style.width = "0";
    nav.style.width = "100%";
    count--;
  }
});
//Insert Graph
// ist chart

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Sales", "Growth", "Profit", "Cancellation", "Loss", "Orders"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 1, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      responsive: true,
    },
  },
});
// second chart
const ctx1 = document.getElementById("myChart1");

new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["Sales", "Growth", "Profit", "Cancellation", "Loss", "Orders"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      responsive: true,
    },
  },
});
let ProductsData = JSON.parse(localStorage.getItem("Products")) || [];
let totalProducts = document.getElementById("totalProducts");
totalProducts.textContent = ProductsData.length;
let UserData = JSON.parse(localStorage.getItem("User")) || [];
let CustomerBox = document.getElementById("CustomerBox");
CustomerBox.textContent = UserData.length;
