


export const setBackground = ({ img = "https://images.pexels.com/photos/1249214/pexels-photo-1249214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    color = "rgba(0 ,0,0,0.5)"

} = {}) => {
    return `background : url(${img}) center/cover fixed no-repeat `
}


export const setRem = (number = 16) => {

    return `${number / 16}rem`;

}


export const setLetterSpacing = (number = 2) => {


    return `letter-spacing:${number}px`

}

export const setTransition = ({ property = "all", time = "0.3s", timing = "ease-in-out" } = {}) => {

    return `transition:${property} ${time} ${timing}`;
}