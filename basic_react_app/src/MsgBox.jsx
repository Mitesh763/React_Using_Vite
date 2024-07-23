import './MsgBox.css'

function MsgBox({name,text_color}) {
    let text_co = {color: `${text_color}`}
    return (
        <div className='MsgBox'>
            <h2 style={text_co}>Hello {name}</h2>
            <h4>This name use {text_color} color</h4>
        </div>
    )
}

export {MsgBox}