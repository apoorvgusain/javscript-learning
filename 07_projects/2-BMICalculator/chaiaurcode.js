const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)// value received is in string
    const weight = parseInt(document.querySelector('#weight').value)
    const results= document.querySelector("#results")
    if(height === "" || height<=0 || isNaN(height) ){
        results.innerHTML = `Please give a valid height ${height}`
    } else if(weight === "" || weight<=0 || isNaN(weight) ){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const li = document.createElement('span')
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span><br>`
        
        if(bmi<18.6)
        bmiRange="You are  under weight"
        else if(bmi>=18.6 || bmi<=24.9)
        bmiRange="You are  normal weight"
        else if(bmi>24.9)
        bmiRange="You are over weight"
        results.appendChild(document.createTextNode( bmiRange))
        
    }


})