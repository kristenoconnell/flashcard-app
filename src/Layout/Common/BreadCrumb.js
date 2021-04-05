import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ linkName="", link="", pageName="Page Name"}) {
    return (
        <div className="row">
            <Link className="m-1" to="/"><i className="bi bi-house m-1"></i>Home</Link>
            {link !== "" ? <p className="m-1 text-info">/</p> : ""}
            <Link className={link !== "" ? "m-1" : ""} to={link}>{linkName}</Link>
            <p className="m-1 text-info">/ {pageName}</p>
         </div>

    )
}

export default BreadCrumb;