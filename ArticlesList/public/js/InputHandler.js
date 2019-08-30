document.addEventListener('DOMContentLoaded', () => {
    let files = []
    let Input = document.getElementById("IMG")
    let Preview = document.getElementById("Preview")
    Input.addEventListener('change', (e) => {
        let file = e.target.files[0]
        reader = new FileReader
        reader.readAsDataURL(file)
        reader.onload = () => {
            console.log(reader)
            Preview.src = reader.result
            Preview.style.display = "initial"
        }
    })
    document.getElementById('InputFileButton').addEventListener('click', (e) => {
        Input.click()
        e.preventDefault()
    })
})