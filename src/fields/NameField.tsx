import { TextField } from "@mui/material"
import { FormikProps } from "formik"

const NameField = ( {formikProps}: {formikProps: FormikProps<any>} ) => {
    return (
        <TextField
        placeholder="Nombre"
        name="name"
        value={formikProps.values.name}
        onChange={formikProps.handleChange}
        error={Boolean(formikProps.errors.name)}
        helperText={Boolean(formikProps.errors.name) && formikProps.errors.name as string}
        />
    )
}

export default NameField
