import { TextField } from "@mui/material"
import { FormikProps } from "formik"

const LastNameField = ( {formikProps}: {formikProps: FormikProps<any>} ) => {
    return (
        <TextField
        placeholder="Apellidos"
        name="lastname"
        value={formikProps.values.lastname}
        onChange={formikProps.handleChange}
        error={Boolean(formikProps.errors.lastname)}
        helperText={Boolean(formikProps.errors.lastname) && formikProps.errors.lastname as string}
        />
    )
}

export default LastNameField
