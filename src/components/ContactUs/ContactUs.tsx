import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { validate } from '../../utilities/validate'

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
  })

  return (
    <section>
      <div>
        <div>
          <h2>Contact Me</h2>
          <p>If you would like to contact me, you may do so by filling out this form. Leave me an email or phone number, and I'll reach out as soon as I can.</p>
        </div>

        <form onSubmit={(e) => {
          formik.handleSubmit()
        }}>
          {/* Name */}
          <label htmlFor="name">First Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          {/* Subject */}
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div>{formik.errors.subject}</div>
          ) : null}

          {/* Phone */}
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}

          {/* Email */}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          {/* Message */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (
            <div>{formik.errors.message}</div>
          ) : null}

          <button type="submit">Submit</button>

        </form>
      </div>
    </section>
  )
}
