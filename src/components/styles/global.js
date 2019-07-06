
import { css } from 'styled-components'


export const setColor = {
    primaryColor: '#af9a7d',
    mainWhite: "#fff",
    mainBlack: "#222",
    mainGrey: "#ececec",
    lightGrey: "#f7f7f7"
}



// media query
const sizes = {
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576
}

export const setFont = {
    main: `font-family: 'Raleway', sans-serif`
}

export const media = Object.keys(sizes).reduce((acc, label) => {

    acc[label] = (...args) => css`
    @media(min-width : ${sizes[label] / 16}em) {
        ${css(...args)}
    }
    `
    return acc;
}, {})