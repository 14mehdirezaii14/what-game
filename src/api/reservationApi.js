import axios from 'axios'


const reservationApi = ({ date, timee, numberOfPersons, name, lastName, email, phone }) => {
    const formData = new FormData();
    formData.append('date', date)
    formData.append('timee', timee)
    formData.append('numberOfPersons', numberOfPersons)
    formData.append('name', name)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('phone', phone)


    axios.post("http://127.0.0.1:8000/ticket/", formData).then((res) => {
        console.log(JSON.stringify(res.data))
    })

}


export default reservationApi