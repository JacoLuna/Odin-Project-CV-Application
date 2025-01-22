import "./CustomInput.scss"

function CustomInput({label, type, value, placeHolder, readOnly}){
    return (
        <div className="input-container">
            <label>{label}</label>
            <input
                readOnly={readOnly}
                value={value}
                type={type}
                placeholder={placeHolder}
            ></input>
            <div className="underline"></div>
        </div>
    )
}

export default CustomInput