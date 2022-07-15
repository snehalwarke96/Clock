setInterval(() => {
    let timeData = new Date();
    hrData= timeData.getHours();
    minData= timeData.getMinutes();
    secData= timeData.getSeconds();
    hrRot= hrData*30 + minData/2;
    minRot= minData*6;
    secRot =secData*6;

    hour.style.transform = `rotate(${hrRot}deg)`;
    min.style.transform = `rotate(${minRot}deg)`;
    sec.style.transform = `rotate(${secRot}deg)`;
    
}, 1000);