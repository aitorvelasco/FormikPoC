import { TextField } from "@mui/material"
import { FormikProps } from "formik"

const EmailField = ( {formikProps}: {formikProps: FormikProps<any>} ) => {
    return (
        <TextField
        placeholder="Correo electronico"
        name="email"
        value={formikProps.values.email}
        onChange={formikProps.handleChange}
        error={Boolean(formikProps.errors.email)}
        helperText={Boolean(formikProps.errors.email) && formikProps.errors.email as string}
        />
    )
}

export default EmailField
