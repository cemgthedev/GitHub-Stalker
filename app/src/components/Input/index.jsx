import '../../styles/global.css';

export function Input({ handleChange, placeholder }) {

    return (
        <input 
            onChange={e => handleChange(e.target.value)} 
            className='bg-gray-50 
                      ring-2 
                      ring-gray-50 
                      text-gray-900 
                      rounded-md 
                      p-2 
                      focus:outline-none 
                      hover:ring-opacity-80 
                      focus:ring-green-500 
                      hover:shadow-inner' 
            type="text" 
            placeholder={ placeholder } 
        />
    );

}