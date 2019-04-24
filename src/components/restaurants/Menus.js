import React from 'react';

function Menus(props) {

    return (
        <div>
            {props.data.map((item, i) => {
                return <p key={i}>{item}</p>
            })}
        </div>
    )
}

export default Menus;