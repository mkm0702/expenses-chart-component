
const chartContainer = document.getElementById("chart");

let allData = [];

function getData(){
    fetch("data.json")
     .then((res) => res.json())
     .then((data)=>{
        allData = data;
        const highestAmount = Math.max(...allData.map(item => item.amount));
        createBar(allData ,highestAmount);

        
     });
}

getData();

function createBar(allData, highestAmount){

    allData.forEach((data)=>{
    
        const barCont = document.createElement("div");
        const barAmountDiv = document.createElement("div");
        const barDayDiv = document.createElement("div");

        barAmountDiv.innerText = `$ ${data.amount}`;
        barDayDiv.innerText = `${data.day}`; 

        barCont.classList.add("bar");
        
        barCont.dataset.day = `${data.day}`;

        if(data.amount == highestAmount){
            barCont.classList.add("teal");
        }else{
            barCont.classList.add("coral");
        }

        let barHeight = (data.amount /highestAmount)*150;

        barCont.style.height = `${barHeight}px`;
        
        barDayDiv.classList.add("day-label");
        barAmountDiv.classList.add("amount-tooltip");

        barCont.appendChild(barAmountDiv);
        barCont.appendChild(barDayDiv);

        chartContainer.appendChild(barCont);
    });

}
