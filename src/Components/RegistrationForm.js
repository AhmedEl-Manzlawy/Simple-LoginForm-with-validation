import { useState } from "react";

function RegistrationForm() {

    const [userForm , setUserForm]=useState({
        name :"",
        email:"",
        userName:"",
        password:"",
        confirmPassword:"",
    })

    const [userFormErrs, setUserFormErrs] = useState({
        nameErr:null,
        emailErr: null,
        userNameErr:null,
        passwordErr: null,
        confirmPasswordErr: null,
      });

    const handelFormChange=(event)=>{
        if(event.target.id ==="name"){
            setUserForm({
                ...userForm,
                name:event.target.value
            });

            setUserFormErrs({
                ...userFormErrs,
                nameErr:
                  event.target.value.length === 0
                    ? "This field is required"
                    : null,
              });

        }else if(event.target.id === "email"){
            setUserForm({
                ...userForm,
                email:event.target.value
            });

            setUserFormErrs({
                ...userFormErrs,
                emailErr:
                  event.target.value.length === 0
                    ? "This field is required"
                    :/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(event.target.value)===false
                    ?"Please enter a valid email"
                    : null,
              });

        }else if(event.target.id === "userName"){
            setUserForm({
                ...userForm,
                userName:event.target.value
            });

            setUserFormErrs({
                ...userFormErrs,
                userNameErr:
                  event.target.value.length === 0
                    ? "This field is required"
                    :/^\S*$/.test(event.target.value)===false
                    ?"Please enter a valid Name"
                    : null,
              });

        }else if(event.target.id === "password"){
            setUserForm({
                ...userForm,
                password:event.target.value
            });

            setUserFormErrs({
                ...userFormErrs,
                passwordErr:
                  event.target.value.length === 0
                    ? "This field is required"
                    :/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(event.target.value)===false
                    ?"Please enter a valid Password"
                    : null,
              });


        }else if(event.target.id ==="confirmPassword"){
            setUserForm({
                ...userForm,
                confirmPassword:event.target.value
            })

            setUserFormErrs({
                ...userFormErrs,
                confirmPasswordErr:
                  event.target.value.length === 0
                    ? "This field is required"
                    :event.target.value !== userForm.password
                    ?"Doesn't Match Password"
                    : null,
              });
            
        }
    }

    const handleSubmitForm =(e)=>{
        e.preventDefault();
        if (!userFormErrs.nameErr &&!userFormErrs.emailErr && !userFormErrs.userNameErr &&!userFormErrs.passwordErr&&!userFormErrs.confirmPasswordErr ) {
        console.log(userForm);
        }
    }
    

  return (
    <>
    <h1 className=" d-flex justify-content-center">Registration Form</h1>
    <form className="mx-4 px-4 my-3 py-5 border-bottom" onSubmit={handleSubmitForm}>
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
        <button className="btn btn-info inline-block" >
            <i className="fa-solid fa-eye-slash"></i>
            </button>
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
