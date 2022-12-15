import React from "react"

export default props =>
    <a href={props.nav}>
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </a>