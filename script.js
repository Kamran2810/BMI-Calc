const calculateBMI = () => {
    const htvalue = document.getElementById('htcm').value;
    const wtvalue = document.getElementById('wtkg').value;

    if(htvalue == 0 || htvalue < 0){
        alert("Enter Correct Height !")
    }
    if(wtvalue == 0 || wtvalue < 0){
        alert("Enter Correct Weight !")
    }

    const bmiCalc = (ht,wt) => {
        let bmi = (wt/((ht/100)**2)).toFixed(2)
        return bmi;
    }
    let result;
    result = bmiCalc(htvalue,wtvalue);
    if(result > 0 && result <= 18.49){
        result2 = "Under Weight";
        resultContainer.style.color = "blue";
    }else if(result >= 18.50 && result <= 24.99){
        result2 = "Normal Weight";
        resultContainer.style.color = "green";
    }else if(result >= 25 && result <= 29.99){
        result2 = "Over Weight";
        resultContainer.style.color = "orange";
    }else if(result >= 30){
        result2 = "Obesity";
        resultContainer.style.color = "red";
    }



    document.getElementById('resultContainer').innerHTML = `BMI is : ${result}<br\> BMI Category : ${result2}`

}
