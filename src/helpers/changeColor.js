export default function changeColor () {
    return `rgba(${Math.floor( Math.random() * Math.floor( 255 ) )}, ${Math.floor( Math.random() * Math.floor( 255 ) )}, ${Math.floor( Math.random() * Math.floor( 255 ) )}, .4)`;
}