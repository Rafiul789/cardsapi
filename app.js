const searchButton = () => {
    const inputValue = document.getElementById('input-value')
    const errorMessage = document.getElementById('error')


    const inputVal = inputValue.value
    if (isNaN(inputVal)) {
        // alert('Please enter a valid number')
        errorMessage.innerText = "Please Enter a valid number"
    }


    // const div = document.createElement('div')
    // const show = `<h1> ${inputValue.value}</h1>`

    // div.appendChild(show)
}