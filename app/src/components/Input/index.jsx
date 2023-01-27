import '../../styles/global.css'

export function Input(props) {
    return (
        <input onChange={e => props.handleChange(e.target.value)} className='bg-gray-50 ring-2 ring-gray-50 text-black rounded-md p-2 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 hover:ring-green-500' type="text" placeholder={props.placeholder} />
    );
}