import Axios from "./axios";



const getEscapeRoomApi = () => {
    Axios.get('EscapeRoomGet/').then((res) => {
        return res.data
    })
}


export default getEscapeRoomApi