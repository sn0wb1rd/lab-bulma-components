import React from 'react'


const CoolButton = (props) => {
    
    console.log(props)
    // dont forget the space in the Burma classnames
    let className = 'button ' + props.className
    if (props.isSmall) {className += ' is-small'}
    if (props.isDanger) {className += ' is-danger'}
    if (props.isSuccess) {className += ' is-success'}

    return (
        <span>
            <button className={className}>button 2</button>  
        </span>
    )
}

export default CoolButton