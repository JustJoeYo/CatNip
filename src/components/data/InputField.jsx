import react from 'react';

class InputField extends react.Component {
    render() {
        return(
            <input 
            className='text-text-color h-[40px] w-[190px] bg-transparent border-none outline-none text-[15px]' 
            placeholder={this.props.placeholder} 
            type={this.props.type}
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.target.value)}
            />
        );
    }
}

export default InputField;