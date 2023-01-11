import React from "react"
import { Link } from "react-router-dom"
const Broadcast = ({ linkList }) => {
    return <div className="container text-right">
        <div className="row">
            <div className="col-12">
                <div className="d-flex">
                    {linkList.map((item, index) => {
                        return (
                            <>
                                <Link className="text-light" to={item.src}>{item.pageName} <span className="px-3"> <img width={10} height={10} src="/assets/img/icons/arrowLeft.svg" alt="" /> </span> </Link>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>

}



export default Broadcast