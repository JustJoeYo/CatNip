import userIcon from '../../assets/person.png'
import emailIcon from '../../assets/email.png'
import passwordIcon from '../../assets/password.png'
import { Component } from 'react'
import * as Yup from 'yup';
import AuthService from '../../services/auth.service'
import { Formik, Field, Form, ErrorMessage } from "formik";

type Props = {};

type State = {
  username: string,
  password: string,
  email: string,
  successful: boolean,
  message: string
};

class register extends Component<Props, State> {
  constructor(props: State) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      username: "",
      password: "",
      email: "",
      successful: false,
      message: ""
    };
  }

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          "len",
          "The username must be between 3 and 20 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
        )
        .required("This field is required!"),
      email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
      password: Yup.string()
        .test(
          "len",
          "The password must be between 6 and 40 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 6 &&
            val.toString().length <= 40
        )
        .required("This field is required!"),
    });
  }

  handleRegister(formValue: { username: string; email: string; password: string }) {
    const { username, email, password } = formValue;

    this.setState({
      message: "",
      successful: false
    });

    AuthService.register(
      username,
      email,
      password
    ).then(
      response => {
        this.setState({
          message: response.data.message,
          successful: true
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    const { successful, message } = this.state;

    const initialValues = {
      username: "",
      email: "",
      password: "",
    };



    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleRegister}
        >
          <Form>
            {!successful && (
              <div className='container w-[400px] flex-column pt-4 mx-auto bg-indigo-950 bg-opacity-70 pb-[30px]'>
                <div className='flex-column items-center gap-[9px] w-full mt-[30px]'>
                  <div className='text text-text-color text-4xl font-bold flex justify-center items-center'>
                    Sign Up
                  </div>
        
                  <div className='flex justify-center items-center mt-3'>
                    <div className='w-[61px] h-[6px] bg-indigo-800 rounded-md'></div>
                  </div>
                </div>
        
                <div className='flex-column mt-[55px] gap-[25px]'>
        
                  <div className='flex items-center m-auto w-[280px] h-[60px] bg-indigo-950 bg-opacity-60 border border-text-color border-opacity-10 rounded-md'>
                    <img className='mx-[30px]' src={userIcon} alt="" />
                    <Field placeholder='Username' name="username" type="text" className="form-control text-text-color h-[40px] w-[190px] bg-transparent border-none outline-none text-[15px]" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="alert alert-danger text-text-color"
                    />
                  </div>
        
                  <div className='mt-5 flex items-center m-auto w-[280px] h-[60px] bg-indigo-950 bg-opacity-60 border border-text-color border-opacity-10 rounded-md'>
                    <img className='mx-[30px]'  src={emailIcon} alt="" />
                    <Field placeholder='Email' name="email" type="email" className="form-control text-text-color h-[40px] w-[190px] bg-transparent border-none outline-none text-[15px]" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="alert alert-danger text-text-color"
                    />
                  </div>
        
                  <div className='mt-5 flex items-center m-auto w-[280px] h-[60px] bg-indigo-950 bg-opacity-60 border border-text-color border-opacity-10 rounded-md'>
                    <img className='mx-[30px]'  src={passwordIcon} alt="" />
                    <Field placeholder='Password' name="password" type="password" className="form-control text-text-color h-[40px] w-[190px] bg-transparent border-none outline-none text-[15px]" />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="alert alert-danger text-text-color"
                    />
                  </div>
        
                  <div className='text-text-color flex justify-center items-center mt-[10px] text-[18px]'>Forgot Password? <span className=' text-indigo-600 cursor-pointer mx-[5px]'>Click Here</span></div>
                  
                  <div className="flex gap-[30px] mt-[10px] mx-[60px]">
                    <button type="submit" className='flex text-text-color justify-center items-center w-[275px] h-[50px] bg-indigo-800 hover:bg-indigo-600 rounded-[50px] text-[19px] font-bold cursor-pointer'>
                    Sign Up
                    </button>
                  </div>
        
                </div>
              </div>
            )}

            {message && (
                  <div className="form-group">
                    <div
                      className={
                        successful ? "alert alert-success" : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
          </Form>
        </Formik>
      </>
    );
  }
}

export default register;