import React from 'react'

const allSortButtons = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white'
  }

const CoolButton = (props) => {
    
    // dont forget the space in the Burma classnames
    let className = 'button ' + props.className
    // It 3
    // if (props.isSmall) {className += ' is-small'}
    // if (props.isDanger) {className += ' is-danger'}
    // if (props.isSuccess) {className += ' is-success'}

    // BONUS!
    for (let i in allSortButtons) {
        if (props[i]) {
            className += ' ' + allSortButtons[i]
        }
    }

    return (
        <span>
            <button className={className}>{props.label}</button>  
        </span>
    )
}

export default CoolButton