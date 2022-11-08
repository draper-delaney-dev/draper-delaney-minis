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
          <h2 className="text-4xl py-6">Contact Us</h2>
          <p className="text-xl pb-4">Think our food is fantastic? Or does it taste a bit like plastic? Please let us know with a comment below.</p>
        </div>

        <Card classes="w-8/12 p-6 justify-self-center">
          <form className={'flex flex-col'} onSubmit={(e) => {
            formik.handleSubmit()
          }}>
            {/* Name */}
            {/* <label htmlFor="name">First Name</label> */}
            <div className="mb-4">
              <InputField
                id="name"
                name="name"
                type="text"
                classes={`${formik.touched.name && formik.errors.name ? 'border border-red-500': null}`}
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <Required classes="">{formik.errors.name}</Required>
              ) : null}
            </div>

            {/* Subject */}
            {/* <label htmlFor="subject">Subject</label> */}
            <div className="mb-4">
              <InputField
                id="subject"
                name="subject"
                type="text"
                classes={`${formik.touched.subject && formik.errors.subject ? 'border border-red-500': null}`}
                placeholder="Subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <Required classes="">{formik.errors.subject}</Required>
              ) : null}
            </div>

            {/* Phone */}
            {/* <label htmlFor="phone">Phone Number</label> */}
            <div className="mb-4">
              <InputField
                id="phone"
                name="phone"
                type="text"
                classes={`${formik.touched.phone && formik.errors.phone ? 'border border-red-500': null}`}
                placeholder="Phone Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <Required classes="">{formik.errors.phone}</Required>
              ) : null}
            </div>

            {/* Email */}
            {/* <label htmlFor="email">Email</label> */}
            <div className="mb-4">
              <InputField
                id="email"
                name="email"
                type="email"
                classes={`${formik.touched.email && formik.errors.email ? 'border border-red-500': null}`}
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <Required classes="">{formik.errors.email}</Required>
              ) : null}
            </div>

            {/* Message */}
            {/* <label htmlFor="message">Message</label> */}
            <div className="mb-4">
              <TextArea
                id="message"
                name="message"
                classes={`h-48 ${formik.touched.message && formik.errors.message ? 'border border-red-500': null}`}
                placeholder="Message..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <Required classes="">{formik.errors.message}</Required>
              ) : null}
            </div>

            <Button classes="" type="submit">Submit</Button>

          </form>
        </Card>
    </Main>
  );
};