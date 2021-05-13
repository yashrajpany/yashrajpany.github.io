const dateInput = document.getElementById('date')
const submit = document.getElementById('btn')
let result = document.querySelector('.result')

submit.addEventListener('click', () =>{
    
    const date = dateInput.value
    
    function fetching(){
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
                        fee: data.fee_type,
                        availibility: data.available_capacity,
                        vacinie: data.vacinie
                    }
                    // result = `Name: ${output.name},Address: ${output.address},Pincode: ${output.pincode},Availibility: ${output.availibility} and Vacine: ${output.vacinie}`
                    result.innerHTML = ''
                    result.innerHTML += 
                    `<ul class="card card-body text-center mt-5">
                    <li><h4>Name: ${output.name}</h4></li>
                    <li>Address: ${output.address}</li>
                    <li><h4>Pincode: ${output.pincode}</h4></li>
                    <li>Fee: ${output.fee}</li>
                    <li>Availibility: ${output.availibility}</li>
                    <li>Vacine: ${output.vacinie}</li>
                    </ul>`
                })
            }else{
                result.innerHTML = "<h4>No vaccination slots are available for booking!!</h4>"
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
    },900000)
    // every 15 mins
})
    


