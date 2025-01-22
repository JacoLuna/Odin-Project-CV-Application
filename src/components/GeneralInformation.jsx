import CustomInput from "./customInput/CustomInput"
import CustomForm from "./customForm/CustomForm"

function GeneralInformation(){
    const keys = [crypto.randomUUID(), crypto.randomUUID(), crypto.randomUUID(), crypto.randomUUID(), crypto.randomUUID()]
    return(
        <CustomForm
            tittle = "General Information"
            inputs = {[
            <CustomInput key={keys[0]} label="Name" type="text" placeHolder="Daniel"></CustomInput>,
            <CustomInput key={keys[1]} label="Last Name" type="text" placeHolder="Perez"></CustomInput>,
            <CustomInput key={keys[2]} label="Email" type="email" placeHolder="Perez@gmail.com"></CustomInput>,
            <CustomInput key={keys[3]} label="Phone Number" type="number" placeHolder="1146556859"></CustomInput>
            ]}
        ></CustomForm>
    )
}

export default GeneralInformation