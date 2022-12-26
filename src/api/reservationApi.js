import Axios from './axios';


const reservationApi = ({ idGame, nameGame, price, date, timee, numberOfPersons, name, lastName, email, phone }) => {
    const formData = new FormData();
    formData.append('idGame', idGame)
    formData.append('date', date)
    formData.append('nameGame', nameGame)
    formData.append('price', price)
    formData.append('timee', timee)
    formData.append('numberOfPersons', numberOfPersons)
    formData.append('name', name)
    formData.append('lastName', lastName)
    formData.append('email', email)
    formData.append('phone', phone)


    Axios.post("http://127.0.0.1:8000/ticket/", formData).then((res) => {
        console.log(JSON.stringify(res.data))
    })

}


export default reservationApi