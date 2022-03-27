import { useState } from "react";
import './LoginForm.css'

function LoginForm() {
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const [userFormErrs, setUserFormErrs] = useState({
    emailErr: null,
    passwordErr: null,
  });

  const handleFormChange = (event) => {
    console.log(event.target.id, event.target.value);
    if (event.target.id === "email") {
      setUserForm({
        ...userForm,
        email: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        emailErr:
          event.target.value.length === 0
            ? "This field is required"
            :/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(event.target.value)===false
                    ? " Invalid Email format"
            : null,
      });
    } else if (event.target.id === "password") {
      setUserForm({
        ...userForm,
        password: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        passwordErr:
          event.target.value.length === 0
            ? "This field is required"
            : /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(event.target.value)===false
            ? "write valid password"
            : null,
      });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!userFormErrs.emailErr && !userFormErrs.passwordErr) {
      console.log(userForm);
    }
  };

  return (
  <>
  <h1 className=" d-flex justify-content-center">Login Form</h1>
    <form onSubmit={handleSubmitForm} className="mx-5 my-5 py-5 border-bottom">
      
      <div className="mb-3 col-5 ">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className={`form-control ${
            userFormErrs.emailErr ? "border-danger" : ""
          }`}
          id="email"
          aria-describedby="emailHelp"
          value={userForm.email}
          onChange={handleFormChange}
        />
        <div id="emailHelp" className="form-text text-danger">
          {userFormErrs.emailErr}
        </div>
      </div>

      <div className="mb-3 col-5">
        <label htmlFor="password"  className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          aria-describedby="passwordHelp"
          value={userForm.password}
          onChange={handleFormChange}
        />
        <div id="passwordHelp" className="form-text text-danger">
          {userFormErrs.passwordErr}
        </div>
      </div>
      <button type="submit" className="btn btn-primary col-5">
        Submit
      </button>
    </form>
  </>);
}

export default LoginForm;


// import React from "react";
// import { Formik } from "formik";

// const Basic = () => (
//   <div>
//     <h1>Login Form</h1>
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = "Required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3 col-5">
//             <label htmlFor="email" className="form-label">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//             />
//             <div id="emailHelp" className="form-text text-danger">
//               {errors.email && touched.email && errors.email}
//             </div>
//           </div>
//           <div className="mb-3 col-5">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//             />
//             <div id="passwordHelp" className="form-text text-danger">
//             {errors.password && touched.password && errors.password}
//             </div>
            
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="btn btn-primary"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default Basic;

