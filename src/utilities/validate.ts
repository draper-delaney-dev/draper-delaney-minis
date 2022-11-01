import * as Yup from "yup";

export const validate = Yup.object({
  name: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  subject: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  phone: Yup.string()
    .min(10, "Must be 10 characters")
    .max(10, "Must be 10 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .min(2, "Must be 2 characters or more")
    .max(500, "Must be 500 characters or less")
    .required("Required"),
  extra: Yup.string(),
});
