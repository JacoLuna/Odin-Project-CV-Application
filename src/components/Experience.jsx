import CustomInput from "./customInput/CustomInput"
import CustomForm from "./customForm/CustomForm"

function Experience(){    
    const keys = [
        crypto.randomUUID(), 
        crypto.randomUUID(), 
        crypto.randomUUID(), 
        crypto.randomUUID(), 
        crypto.randomUUID()]
    return(
        <CustomForm
            tittle = "Experience"
            inputs = {[
                <CustomInput key={keys[0]} label="Company name" type="text" placeHolder="Very important company"></CustomInput>,
                <CustomInput key={keys[1]} label="Position title" type="text" placeHolder="CEO"></CustomInput>,
                <CustomInput key={keys[2]} label="Main responsibilities of your jobs" type="text" placeHolder="working"></CustomInput>,
                <CustomInput key={keys[3]} label="I worked here from" type="date"></CustomInput>,
                <CustomInput key={keys[4]} label="to" type="date"></CustomInput>
            ]}
        ></CustomForm>
    )
}

export default Experience