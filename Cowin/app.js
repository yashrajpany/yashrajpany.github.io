const dateInput = document.getElementById('date')
const timeInput = document.getElementById('time')
const submit = document.getElementById('btn')
let result = document.querySelector('.result')
let result18 = document.querySelector('.result18')
let output


submit.addEventListener('click', () =>{
    
    const date = dateInput.value
    const time = timeInput.value ? timeInput.value*60000 : 900000
    
    function fetching(){
        result.innerHTML = ''
        result18.innerHTML = ''
        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=312&date=${date}-2021`)
        .then( (res) => {
        return res.json()
        })
        .then((myjson) =>{
            if(myjson.sessions.length !== 0){
                myjson.sessions.forEach(data => {
                    output = {
                        name: data.name,
                        address: data.address,
                        pincode: data.pincode,
                        age: data.min_age_limit,
                        fee: data.fee_type,
                        availibility: data.available_capacity,
                        vacinie: data.vacinie
                    }
                
                  if(output.age === 45){
                    result.innerHTML += `
                    <div class="card-body" style=" color: white;">
                    <h5 class="card-title">Name: ${output.name}</h5>
                    <h5 class="card-title">Address: ${output.address}, ${output.pincode}</h5>
                    <h5 class="card-subtitle mb-2 text-muted">Age:${output.age}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Fee: ${output.fee}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Availibility: ${output.availibility}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Vacine: ${output.vacinie}</h6>
                    </div>`
                  }
                   else{
                        result18.innerHTML += `
                        <div class="card-body" style=" color: white;">
                        <h5 class="card-title">Name: ${output.name}</h5>
                        <h5 class="card-title">Address: ${output.address}, ${output.pincode}</h5>
                        <h5 class="card-subtitle mb-2 text-muted">Age:${output.age}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Fee: ${output.fee}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Availibility: ${output.availibility}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Vacine: ${output.vacinie}</h6>
                        </div>`

                        new Notification(`Available @ Name: ${output.name}, ${output.pincode}`,{
                            body:`Availibility: ${output.availibility}`
                        })
                    }         
                })

            }else{
                result.innerHTML = `<div class="card-body" style="color: white;"><h4>No vaccination slots are available for booking!!</h4></div>`
                Push.create("No vaccination slots are available for booking!!")
            }
        })
    }

    setTimeout(()=>{
        result.innerHTML = ''
        result18.innerHTML = ''
        fetching()
    },0000)
    setInterval(()=>{
        result.innerHTML = ''
        result18.innerHTML = ''
        fetching()
    },`${time}`) 
})
    
