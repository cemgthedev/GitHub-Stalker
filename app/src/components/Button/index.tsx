import '../../styles/global.css';

export type ButtonProps = {
    name: string
}

export function Button({ ...props }: ButtonProps) {

    return (
        <button 
            className='bg-green-700 
                       ring-2 
                       text-white
                       ring-green-700 
                       font-semibold 
                       flex items-center 
                       p-2 
                       rounded-md 
                       hover:bg-green-500 
                       hover:ring-green-500'
        >
            <img src="/icons/MagnifyingGlass.svg" alt="" />
            { props.name }
        </button>
    );

}