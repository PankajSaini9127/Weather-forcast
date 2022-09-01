
let form = document.getElementById("form");
let showdata = document.getElementById("showweather");
let search = document.getElementById("search");


let getdata = async (city)=>{
        showweather.innerHTML = `<h2 id="Loading">Loading..</h2>`
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9ecf421b69dc4305bfe85221223108&q=${city}&aqi=no`);
        var data = await response.json();
       return  showdetail(data, city);
        }

   function showdetail(data1,city) {
    
    showweather.innerHTML = `
                       <div class="row">
                           <div class="col">
                                <h3 id="cityname">${city}</h3>
                              </div><hr> 
                     <div class="col showcity">
                        <div class="col-7" id="temp">
                           <h2 class="temp" id="temp_c">${data1.current.temp_c} &#8451</h2>
                           <h6>${data1.current.temp_f}&#8457</h6>
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
                     
                  </div>
        `  
   }     

form.addEventListener("submit",(e)=>{
e.preventDefault();
getdata(search.value)
})