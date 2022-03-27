import { useState } from "react";

function RegistrationForm() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [userFormErrs, setUserFormErrs] = useState({
    nameErr: null,
    emailErr: null,
    userNameErr: null,
    passwordErr: null,
    confirmPasswordErr: null,
  });

  const handelFormChange = (event) => {
    if (event.target.id === "name") {
      setUserForm({
        ...userForm,
        name: event.target.value,
      });

      setUserFormErrs({
        ...userFormErrs,
        nameErr:
          event.target.value.length === 0 ? "This field is required" : null,
      });
    } else if (event.target.id === "email") {
      setUserForm({
        ...userForm,
        email: event.target.value,
      });

      setUserFormErrs({
        ...userFormErrs,
        emailErr:
          event.target.value.length === 0
            ? "This field is required"
            : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                event.target.value
              ) === false
            ? "Please enter a valid email"
            : null,
      });
    } else if (event.target.id === "userName") {
      setUserForm({
        ...userForm,
        userName: event.target.value,
      });

      setUserFormErrs({
        ...userFormErrs,
        userNameErr:
          event.target.value.length === 0
            ? "This field is required"
            : /^\S*$/.test(event.target.value) === false
            ? "Please enter a valid Name"
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
            : /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
                event.target.value
              ) === false
            ? "Please enter a valid Password"
            : null,
      });
    } else if (event.target.id === "confirmPassword") {
      setUserForm({
        ...userForm,
        confirmPassword: event.target.value,
      });

      setUserFormErrs({
        ...userFormErrs,
        confirmPasswordErr:
          event.target.value.length === 0
            ? "This field is required"
            : event.target.value !== userForm.password
            ? "Doesn't Match Password"
            : null,
      });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !userFormErrs.nameErr &&
      !userFormErrs.emailErr &&
      !userFormErrs.userNameErr &&
      !userFormErrs.passwordErr &&
      !userFormErrs.confirmPasswordErr
    ) {
      console.log(userForm);
    }
  };
  function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }

  return (
    <>
      <h1 className=" d-flex justify-content-center">Registration Form</h1>
      <form
        className="mx-4 px-4 my-3 py-5 border-bottom"
        onSubmit={handleSubmitForm}
      >
        <div className="mb-3 col-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            onChange={handelFormChange}
            value={userForm.name}
          />
          <div id="nameHelp" className="form-text  text-danger">
            {userFormErrs.nameErr}
          </div>
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="name@example.com"
            onChange={handelFormChange}
            value={userForm.email}
          />
          <div id="emailHelp" className="form-text  text-danger">
            {userFormErrs.emailErr}
          </div>
        </div>

        <div className="mb-3 col-5">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            aria-describedby="userNameHelp"
            onChange={handelFormChange}
            value={userForm.userName}
          />
          <div id="userNameHelp" className="form-text text-danger">
            {userFormErrs.userNameErr}
          </div>
        </div>

        <div className="mb-3 col-5">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
              onChange={handelFormChange}
              value={userForm.password}
            />
            <span className="input-group-text" onClick={password_show_hide}>
              <i className="fas fa-eye" id="show_eye"></i>
              <i className="fas fa-eye-slash d-none" id="hide_eye"></i>
            </span>
          </div>

          <div id="passwordHelp" className="form-text text-danger">
            {userFormErrs.passwordErr}
          </div>
        </div>

        <div className="mb-3 col-5">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            aria-describedby="confirmPasswordHelp"
            onChange={handelFormChange}
            value={userForm.confirmPassword}
          />
          <div id="confirmPasswordHelp" className="form-text text-danger">
            {userFormErrs.confirmPasswordErr}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default RegistrationForm;
