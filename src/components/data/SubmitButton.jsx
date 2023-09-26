import react from 'react';

class SubmitButton extends react.Component {
    render() {
        return(
            <button disabled={this.props.disabled} onClick={() => this.props.onClick()} className='flex text-text-color justify-center items-center w-[220px] h-[50px] bg-indigo-800 hover:bg-indigo-600 rounded-[50px] text-[19px] font-bold cursor-pointer'>
                {this.props.text}
            </button>
        );
    }
}

export default SubmitButton;