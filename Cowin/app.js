const dateInput = document.getElementById('date')
const timeInput = document.getElementById('time')
const submit = document.getElementById('btn')
let result = document.querySelector('.result')



submit.addEventListener('click', () =>{
    
    const date = dateInput.value
    const time = timeInput.value*60

     console.log(time)
    
    function fetching(){
        result.innerHTML = ''
        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=312&date=${date}`)
        .then( (res) => {
        return res.json()
        })
        .then((myjson) =>{
            if(myjson.sessions.length !== 0){
                myjson.sessions.forEach(data => {
                    let output = {
                        name: data.name,
                        address: data.address,
                        pincode: data.pincode,
                        age: data.min_age_limit,
                        fee: data.fee_type,
                        availibility: data.available_capacity,
                        vacinie: data.vacinie
                    }

                    if(output.age == 18){

                        Push.create(`Name: ${output.name},Address: ${output.address},Pincode: ${output.pincode},Availibility: ${output.availibility} and Vacine: ${output.vacinie}`)
                        result.innerHTML += `
                        <div class="card-body">
                        <h5 class="card-title">Name: ${output.name}</h5>
                        <h5 class="card-title">Address: ${output.address}, ${output.pincode}</h5>
                        <h5 class="card-subtitle mb-2 text-muted">Age:${output.age}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Fee: ${output.fee}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Availibility: ${output.availibility}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Vacine: ${output.vacinie}</h6>
                        </div>`
                    }
                    
                    
                })
            }else{
                result.innerHTML = `<div class="card-body"><h4>No vaccination slots are available for booking!!</h4></div>`
                Push.create("No vaccination slots are available for booking!!")
            }
            
        })
    }

    setTimeout(()=>{
        result.innerHTML = ''
        fetching()
    },0000)
    setInterval(()=>{
        result.innerHTML = ''
        fetching()
    },`${time}000`)
})
    
