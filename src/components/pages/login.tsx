import userIcon from '../../assets/person.png'
import passwordIcon from '../../assets/password.png'
import React, { Component } from 'react'
import * as Yup from 'yup';
import AuthService from "../../services/auth.service";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Navigate } from 'react-router-dom';

type Props = {};

type State = {
  redirect: string | null,
  username: string,
  password: string,
  loading: boolean,
  message: string
};

export function doLogout() {
    
}

class Login extends Component<Props, State> {
  constructor(props: State) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      redirect: null,
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      this.setState({ redirect: "/" });
    };
  }


  validationSchema() {
    return Yup.object().shape({
      username: Yup.string().required("This field is required!"),
      password: Yup.string().required("This field is required!"),
    });
  }

  handleLogin(formValue: { username: string; password: string }) {
    const { username, password } = formValue;

    this.setState({
      message: "",
      loading: true
    });


    AuthService.login(username, password).then(
      () => {
        this.setState({
          redirect: "/"
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
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    
    const { loading, message } = this.state;

    const initialValues = {
      username: "",
      password: "",
    };
    
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleLogin}
        >
          <Form>
            <div className='container w-[400px] flex-column mx-auto pt-3 bg-indigo-950 bg-opacity-70 pb-[30px]'>
              <div className='flex-column items-center gap-[9px] w-full mt-[30px]'>
                <div className='text text-text-color text-4xl font-bold flex justify-center items-center'>
                  Login
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
                  className="alert alert-danger"
                  />
                </div>
      
                <div className='mt-5 flex items-center m-auto w-[280px] h-[60px] bg-indigo-950 bg-opacity-60 border border-text-color border-opacity-10 rounded-md'>
                  <img className='mx-[30px]'  src={passwordIcon} alt="" />
                  <Field placeholder='Password' name="password" type="password" className="form-control text-text-color h-[40px] w-[190px] bg-transparent border-none outline-none text-[15px]" />
                  <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                  />
                </div>
      
                <div className='text-text-color flex justify-center items-center mt-[10px] text-[18px]'>Forgot Password? <span className=' text-indigo-600 cursor-pointer mx-[5px]'>Click Here</span></div>
                
                <div className="flex gap-[30px] mt-[10px] mx-[60px]">
                  <button type="submit" disabled={loading} className='flex text-text-color justify-center items-center w-[275px] h-[50px] bg-indigo-800 hover:bg-indigo-600 rounded-[50px] text-[19px] font-bold cursor-pointer'>
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    Login
                  </button>
                </div>

              </div>
            </div>
            {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
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

export default Login;