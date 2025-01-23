import CustomInput from "./customInput/CustomInput"
import CustomForm from "./customForm/CustomForm"

function Studies(){
    const keys = [
        crypto.randomUUID(), 
        crypto.randomUUID(), 
        crypto.randomUUID()]
    return(

        <CustomForm
            tittle = "Studies"
            inputs = {[
                <CustomInput key={keys[0]} label="school name" type="text" placeHolder="The big schoool of learning"></CustomInput>,
                <CustomInput key={keys[1]} label="title of study" type="text" placeHolder="Bacherlor's degree in learning"></CustomInput>,
                <CustomInput key={keys[2]} label="date of study" type="date"></CustomInput>,
            ]}
        ></CustomForm>
    )
}

export default Studies