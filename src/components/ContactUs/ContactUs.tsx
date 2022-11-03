import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { validate } from '../../utilities/validate'
import InputField from '../ui/InputField';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Main from '../ui/Main';
import TextArea from '../ui/TextArea';
import Required from '../ui/Required';

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      name: '',
      subject: '',
      phone: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      subject: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      phone: Yup.string()
        .min(10, 'Must be 10 characters')
        .max(10, 'Must be 10 characters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(500, 'Must be 500 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  });

  return (
    <Main classes="grid justify-items-center">
        <div className={'text-center w-7/12'}>
          <h2>Contact Me</h2>
          <p>Think our food is fantastic? Or does it taste a bit like plastic? Please let us know with a comment below.</p>
        </div>

        <Card classes="w-8/12 p-6 justify-self-center">
          <form className={'flex flex-col justify-items-center'} onSubmit={(e) => {
            formik.handleSubmit()
          }}>
            {/* Name */}
            {/* <label htmlFor="name">First Name</label> */}
            <InputField
              id="name"
              name="name"
              type="text"
              classes="mb-4"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Required>{formik.errors.name}</Required>
            ) : null}

            {/* Subject */}
            {/* <label htmlFor="subject">Subject</label> */}
            <InputField
              id="subject"
              name="subject"
              type="text"
              classes="mb-4"
              placeholder="Subject"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <Required>{formik.errors.subject}</Required>
            ) : null}

            {/* Phone */}
            {/* <label htmlFor="phone">Phone Number</label> */}
            <InputField
              id="phone"
              name="phone"
              type="text"
              classes="mb-4"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <Required>{formik.errors.phone}</Required>
            ) : null}

            {/* Email */}
            {/* <label htmlFor="email">Email</label> */}
            <InputField
              id="email"
              name="email"
              type="email"
              classes="mb-4"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Required>{formik.errors.email}</Required>
            ) : null}

            {/* Message */}
            {/* <label htmlFor="message">Message</label> */}
            <TextArea
              id="message"
              name="message"
              classes="mb-4 h-48"
              placeholder="Message..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <Required>{formik.errors.message}</Required>
            ) : null}

            <Button classes="" type="submit">Submit</Button>

          </form>
        </Card>
    </Main>
  );
};