const btnImg = document.querySelector('.img')
const id = document.getElementById('id')
const description = document.querySelector('.info p')

console.log(description)

const advice = async () => {
    
    try {
        const url = 'https://api.adviceslip.com/advice'
        const response = await fetch(url)
        const adviceApi = await response.json()
        
        const idAdvice = adviceApi.slip.id
        const adviceSlip = adviceApi.slip.advice

        id.innerText = idAdvice
        description.innerText = adviceSlip
    } catch (error) {
        console.log("Erro na API", error)
    } 
}

btnImg.addEventListener('click', advice)

advice()