import Axios from "./axios";



const getEscapeRoomApi = () => {
    Axios.get('EscapeRoomGet/').then((res) => {
        console.log(res.data)
        return res.data
    })
}


export default getEscapeRoomApi