import { Formik, Form } from "formik"
import { Button, Container, Stack, Typography } from '@mui/material'
import * as yup from 'yup'
import { useState } from "react"
import TextFieldFormik from "./TextFieldFormik"


const validationSchema1 = yup.object({
  name: yup
    .string()
    .min(3, 'Minimo 3 caracteres')
    .required('Nombre obligatorio'),
  lastname: yup
    .string()
    .min(3, 'Minimo 3 caracteres')
    .required('Apellido obligatorio'),
  phone: yup
    .string()
    .min(9, 'Te faltan digitos')
    .required('Teléfono obligatorio'),
})

const validationSchema2 = yup.object({
  name: yup
    .string()
    .min(3, 'Minimo 3 caracteres')
    .required('Nombre obligatorio'),
  phone: yup
    .string()
    .min(9, 'Te faltan digitos')
    .required('Teléfono obligatorio'),
  email: yup
  .string()
  .email('Escribe un formato de correo correcto')
  .required('Correo obligatorio')
})

enum FieldName {
  name = 'name',
  lastname = 'lastname',
  phone = 'phone',
  email = 'email'
}

const FORM1_INITIAL_VALUES = {
  name: '',
  lastname: '',
  phone: ''
}

const FORM2_INITIAL_VALUES = {
  name: '',
  phone: '',
  email: '',
}

const nameField = <TextFieldFormik name={FieldName.name} placeholder="Nombre" />
const phoneField =  <TextFieldFormik name={FieldName.phone} placeholder="Teléfono" inputProps={{ maxLength: 9 }} />

function App() {
  const [resultForm1, setResultForm1] = useState(FORM1_INITIAL_VALUES)
  const [resultForm2, setResultForm2] = useState(FORM2_INITIAL_VALUES)
  return (
    <Container maxWidth="sm">
      <Typography align="center" mb={3} variant="h3">Formik splitted fields PoC</Typography>

      <Typography align="center" py={3} variant="h4">Form 1</Typography>
      <Formik validationSchema={validationSchema1} initialValues={FORM1_INITIAL_VALUES} onSubmit={(values, actions) => {
        setResultForm1(values)
        actions.resetForm()
      }}>
        {(formikProps) => (
          <Form>
            <Stack spacing={2}>
              {nameField}
              <TextFieldFormik name={FieldName.lastname} placeholder="Apellido" />
              {phoneField}
              <Button variant="contained" onClick={() => formikProps.handleSubmit()}>Enviar</Button>
            </Stack>
          </Form>
        )}
    </Formik>

    <Typography variant="h5" align="center">{resultForm1.name} {resultForm1.lastname} {resultForm1.phone}</Typography>


    <Typography align="center" py={3} variant="h4">Form 2</Typography>
      <Formik validationSchema={validationSchema2} initialValues={FORM2_INITIAL_VALUES} onSubmit={(values, actions) => {
        setResultForm2(values)
        actions.resetForm()
      }}>
        {(formikProps) => (
        <Form>
            <Stack spacing={2}>
              {nameField}
              {phoneField}
              <TextFieldFormik name={FieldName.email} placeholder="Correo electrónico" />
              <Button variant="contained" onClick={() => formikProps.handleSubmit()}>Enviar</Button>
            </Stack>
        </Form>
        )}
    </Formik>

    <Typography variant="h5" align="center">{resultForm2.name} {resultForm2.phone} {resultForm2.email}</Typography>

    </Container>
  )
}

export default App
