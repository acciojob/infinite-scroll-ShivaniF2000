 const infiList = document.getElementById("infi-list");
  const listItems = infiList.getElementsByTagName("li");
  const totalItems = 10; // Change this number to adjust the initial number of list items
  let counter = 0;
  
  function addMoreItems() {
    // Add 2 more items to the list
    for (let i = 0; i < 2; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = "List item " + (counter + i + 1);
      infiList.appendChild(listItem);
    }
    counter += 2;
  }
  
  // Add initial list items
  for (let i = 1; i <= totalItems; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "List item " + i;
    infiList.appendChild(listItem);
    counter++;
  }
  
  // Add event listener to detect when user reaches the end of the list
  infiList.addEventListener("scroll", function () {
    if (
      infiList.scrollTop + infiList.clientHeight >=
      infiList.scrollHeight - 20 // Change this number to adjust the scroll threshold
    ) {
      addMoreItems();
    }
  });