/**
 * Created by Sam on 2020/1/18.
 */
document.addEventListener('DOMContentLoaded', function (evt) {
    let div = document.createElement('div');
    let style = {
        width: '100vmin',
        maxWidth: '540px',
        maxHeight: '540px',
        height: '100vmin',
        margin: '0 auto',
        background: 'red',
        borderRadius: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        fontWeight: 'bold',
        fontSize: '2rem'
    }
    for (let key in style) {
        div.style[key] = style[key]
    }
    div.innerText = 'Hello'
    document.body.appendChild(div);
});