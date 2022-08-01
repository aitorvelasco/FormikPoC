import { TextField } from "@mui/material"
import { FormikProps } from "formik"

const PhoneField = ( {formikProps}: {formikProps: FormikProps<any>} ) => {
    return (
        <TextField
            placeholder="Teléfono"
            name="phone"
            value={formikProps.values.phone}
            onChange={formikProps.handleChange}
            inputProps={{
                maxLength: 9
            }}
            error={Boolean(formikProps.errors.phone)}
            helperText={Boolean(formikProps.errors.phone) && formikProps.errors.phone as string}
        />
    )
}

export default PhoneField
