const inputname = document.getElementById("input-name")
const inputphone = document.getElementById("input-phone")
const inputemail = document.getElementById("input-email")
const input=document.getElementById("form-submit")

input.addEventListener('click', () => {
    const person = {
        name: inputname.value,
        phone: inputphone.value,
        email: inputemail.value
    }
    const persons = localStorage.getItem("persons") ? JSON.parse(localStorage.getItem("persons")) : []

    persons.push(person)
    localStorage.setItem("persons", JSON.stringify(persons))

    if(!inputname.value || !inputphone.value) return alert('Vui lòng nhập lại')
    alert("Hoàn thành")
    inputname.value=""
    inputphone.value=""
    inputemail.value=""

})