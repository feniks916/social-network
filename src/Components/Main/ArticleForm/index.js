import React from 'react';
import { useFormik } from 'formik';

const ArticleForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">
        Email
        <input id="email" name="email" type="email" placeholder="Email Address" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;
