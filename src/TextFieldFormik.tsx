import { TextField, TextFieldProps } from "@mui/material"
import { Field, FieldProps, ErrorMessage, getIn } from "formik"

type TextFieldFormikProps = { name: string} & TextFieldProps

export default function TextFieldFormik<T>( {name, ...rest}: TextFieldFormikProps ) {
    return (
        <Field name={name}>
            {({field, form}: FieldProps<string, T>) =>
                <TextField
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    error={getIn(form.errors, field.name) !== undefined && !!(getIn(form.touched, field.name))}
                    helperText={<ErrorMessage name={field.name} />}
                    {...rest}
                />
            }
        </Field>
    )
}
