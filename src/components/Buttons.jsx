import React from 'react'
import './Buttons.css';


const STYLES =[ 
    "btn--danger--solid",
    "btn--warning--solid",
]

const SIZES= [ 
    "btn--medium", "btn--small"
];

export const Buttons = ({children, type, onClick, buttonsStyle, buttonsSize}) => {

    const checkButtonsStyle= STYLES.includes(buttonsStyle) ? buttonsStyle : [0];
    const checkButtonsSize= SIZES.includes(buttonsSizes) ? buttonsSizes : SIZES [0];
    return (
        <button className={`btn${checkButtonsStyle} ${checkButtonsSize}`} onClick= {onClick} type={type}> 
            {children}
        </button>
        
    )
};

export default Buttons