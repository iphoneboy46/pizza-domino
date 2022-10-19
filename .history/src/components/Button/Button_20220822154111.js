import React from 'react'

function Button(props) {
    return (
        <button className="bg-[#0078ae]" onClick={props.onClick ? () => props.onClick : null}>
            {props.children}
        </button>
    )
}

export const OutLineButton = (props) => {
    return (
        <button className="" onClick={props.onClick ? () => props.onClick : null}>
            {props.children}
        </button>
    )
}

export default Button