import * as Yup from 'yup';


export let signUpSchema = Yup.object({
    userName: Yup.string().min(2,"Min 3 Characters Allowed").required(),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    password: Yup.string().min(8,"Password must be at least 8 characters").required("Required")
})

export let loginSchema = Yup.object({
    email: Yup.string().email("Invalid Email Address").required("Required"),
    password: Yup.string().min(8,"Password must be at least 8 characters").required("Required")
})