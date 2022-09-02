let form = document.getElementById("form"); // form search bar
let showdata = document.getElementById("showweather"); // dom me data display hone ke liye
let search = document.getElementById("search");   //search bar 

let getdata = async (city) => {
  showweather.innerHTML = `<h2 id="Loading">Loading..</h2>`;      //before api calling
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=9ecf421b69dc4305bfe85221223108&q=${city}&aqi=no`
  ); 
  if(error.code===1006){
    showweather.innerHTML =  `<p>${error.message}</p>`
  }                                                              // API calling
  var data = await response.json();                                 //response form api in JSON Format
  return showdetail(data, city);                                    // function call
  
};

function showdetail(data1, city) {                                    //for show data in dom
    console.log(data1)
  showweather.innerHTML = `
                       <div class="row">
                           <div class="col">
                                <h3 id="cityname">${city}</h3>         
                              </div><hr> 
                     <div class="col showcity">
                        <div class="col-7" id="temp">
                           <h2 class="temp" id="temp_c">${data1.current.temp_c} &#8451</h2>
                           <h6>${data1.current.temp_f}&#8457</h6>
                           <p>${data1.current.condition.text}</p>
                        </div>
                        <div class="col-5">
                        <img src="${data1.current.condition.icon}" alt="">
                        </div>
                     </div>
                     <hr>
                     <div class="col humidity">
                           <p>Humidity: ${data1.current.humidity}%</p>
                     </div>
                     <hr>
                     <div class="col ">
                            <p>Wind Speed:${data1.current.gust_kph} km/h</p>
                     </div><hr>
                     <div class="col">
                            <p>Feel:${data1.current.feelslike_c} &#8451</p>
                     </div>
                     </div><hr>
                     <div>
                     <div class="col">
                            <p>Last Update :${data1.current.last_updated}</p>
                     </div>
                      </div>
        `;
        return background(data1);
}

form.addEventListener("submit", (e) => {                //form submit hone pe function call 
  e.preventDefault();                                   // page refresh block 
  getdata(search.value);                                // get data function call &  search bar value send
});


// background image on weather condition base & Temprature
const body = document.getElementById("body");


function background(data1) {
   const temp = data1.current.temp_c;
   console.log(temp)
   if (temp<=22) {
     body.style.backgroundImage = "url(cold.jpg)"
   }
   else if (temp>22 && temp<=38) {
    body.style.backgroundImage = "url(summer.jpg)"
  }
  else if (temp>38) {
    body.style.backgroundImage = "url(hot.jpg)"
  }


    // background change with weather conditon

//    const code =  data1.current.condition.code;
//   console.log(code)
//   if(code==1000){
//     body.style.backgroundImage = "url(sunnyweather.jpg)"
//   }
//   else  if(code==1030){
//     body.style.backgroundImage = "url(mistweather.jpg)"
//   }
//   else  if(code==1003){
//     body.style.backgroundImage = "url(cloudyweather.jpg)"
//   }
//   else  if(code==1273){
//     body.style.backgroundImage = "url(lightrainwiththunder.jpg)"
//   }
}