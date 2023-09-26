import userIcon from '../../assets/person.png'
import emailIcon from '../../assets/email.png'
import passwordIcon from '../../assets/password.png'
import SubmitButton from '../data/SubmitButton'
import InputField from '../data/InputField'
import React from 'react'

interface TheProps {
  username: '';
  password: '';
  email: '';
  buttonDisabled: false;
};

export function doLogout() {
    
}

class register extends React.Component<TheProps> {
  constructor(props: TheProps) {
    super(props);
  }

  setInputValue(property: any, val: any) {
    val = val.trim();
    if (val.length > 40) {
      return;
    }
    this.setState({
      [property]: val
    });
  }

  render() {
    return (
      <>
        <div className='container w-[400px] flex-column mx-auto bg-indigo-950 bg-opacity-70 pb-[30px]'>
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
              <InputField
              placeholder='Username'
              type='text'
              value={this.props.username ? this.props.username : ''}
              onChange={(val: any) => this.setInputValue('username', val)}
              />
            </div>
  
            <div className='mt-5 flex items-center m-auto w-[280px] h-[60px] bg-indigo-950 bg-opacity-60 border border-text-color border-opacity-10 rounded-md'>
              <img className='mx-[30px]'  src={emailIcon} alt="" />
              <InputField
              placeholder='Email'
              type='text'
              value={this.props.email ? this.props.email : ''}
              onChange={(val: any) => this.setInputValue('email', val)}
              />
            </div>
  
            <div className='mt-5 flex items-center m-auto w-[280px] h-[60px] bg-indigo-950 bg-opacity-60 border border-text-color border-opacity-10 rounded-md'>
              <img className='mx-[30px]'  src={passwordIcon} alt="" />
              <InputField
              placeholder='Password'
              type='text'
              value={this.props.password ? this.props.password : ''}
              onChange={(val: any) => this.setInputValue('password', val)}
              />
            </div>
  
            <div className='text-text-color flex justify-center items-center mt-[10px] text-[18px]'>Forgot Password? <span className=' text-indigo-600 cursor-pointer mx-[5px]'>Click Here</span></div>
            
            <div className="flex gap-[30px] mt-[10px] mx-[60px]">
              <SubmitButton
              text={'Sign Up'}
              disabled={false}
              onClick={() => doLogout()}
              />
              <SubmitButton
              text={'Login'}
              disabled={false}
              onClick={() => doLogout()}
              />
            </div>
  
          </div>
        </div>
      </>
    );
  }
}

export default register;