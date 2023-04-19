//your code here!
const infiList=document.getElementById("infi-list");
const listItems=infiList.getElementById("li");
const totalItems=10;
let counter=0;
function addMoreItems(){
	//add more 2 items to the list
	for(let i=0; i<2; i++){
		const listItem= document.createElement("li");
		listItem.textContemnt="List item" +(countter+i+1);
		infiList.appendChild(listItem);
	}
	counter+=2;
}

//add initial list items
for(let i=0;i<=totalItems;i++){
	const listItem=document.createElement("li");
	listList.textContent= "listItem"+i;
	infiList.appendChild(listItem);
	counter++;
}

//add event listener to detect when user reaches the end of the list
infiList.addEventListener("scroll",function(){
	if(
		infiList.scrollTop+infiList.clientHeight>=infiList.scrollHeight-20)
	    {
		addMoreItems();
		}
});
