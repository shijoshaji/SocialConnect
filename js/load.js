window.onload = function () {
  // Fetch the contents of header.html
  loadHeader();
  loadLeftSideBar();
  loadRightSideBar();
};

function loadHeader() {
  fetch('../components/header.html')
    .then((response) => response.text())
    .then((data) => {
      // Insert the contents into the 'header' div
      document.getElementById('header-content').innerHTML = data;
    })
    .catch((error) => console.log(error));
}

function loadLeftSideBar() {
  fetch('../components/left-sidebar.html')
    .then((response) => response.text())
    .then((data) => {
      // Insert the contents into the 'header' div
      document.getElementById('left-sidebar-content').innerHTML = data;
    })
    .catch((error) => console.log(error));
}

function loadRightSideBar() {
  fetch('../components/right-sidebar.html')
    .then((response) => response.text())
    .then((data) => {
      // Insert the contents into the 'header' div
      document.getElementById('right-sidebar-content').innerHTML = data;
    })
    .catch((error) => console.log(error));
}
