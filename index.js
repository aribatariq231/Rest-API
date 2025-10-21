function getweather(){
    const cityInputRef=document.querySelector("#cityname");
    const city = cityInputRef.value;

    const resultDivRef = document.querySelector("#result");
    const res = axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`);
    res
    .then((data)=>{
        console.log(data);
        // resultDivRef.textContent = data.data.current.temp_c;
        console.log(data.data.current);
        resultDivRef.innerHTML=`
        <div>Temp-c: ${data.data.current.temp_c}</div>
        <div>Temp-f: ${data.data.current.temp_f}</div>
        <div>Wind_degree: ${data.data.current.wind_degree}</div>
        <div>Localtime: ${data.data.location.localtime}</div>
        <div>Region: ${data.data.location.region}</div>
        `;

    })
    .catch((error)=>{
        console.log(error);
        alert("error");
    });
}