import { useState } from "react"
import "./CustomForm.scss"

function CustomForm({tittle, inputs}){   

    const [disabled, setDisabled] = useState(false)
    const [btnValue, setBtnValue] = useState("Accept")

    const handleClick = () => {
        setDisabled(!disabled)
        setBtnValue(disabled?"Accept":"Edit")
    }
    return (
        <div id="container">
            <fieldset disabled={disabled}>
                <form className="form-control" disabled>
                    <h2>{tittle}</h2>
                    {
                        inputs.map( (element) => (
                            <div className="input" key={element.key}>{element}</div>
                        ))
                    }
                </form>
            </fieldset>
            <div id="btn-container">
                <input id="btn" type="button" value={btnValue} onClick={handleClick}></input>
            </div>
        </div>
    )
}

export default CustomForm