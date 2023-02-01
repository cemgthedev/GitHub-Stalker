import '../../styles/global.css'

export function PopUp({id, handleVisible, repository}) {
    return (
        <>
            {
                id == repository.id &&
                <div className='bg-white fixed top-0 left-0 bottom-0 right-0 z-[999]'>
                    <div className='text-xl font-semibold text-white bg-slate-900 z-50 flex flex-col gap-8 m-auto mt-8 w-[50vw] min-w-[300px] p-8 rounded-md'>
                        <button className='ring-1 ring-red-500 w-[32px] h-[32px] text-slate-800' onClick={e => handleVisible(null)}>X</button>
                        <h1>{repository.name}</h1>
                    </div>
                </div>
            }
        </>
    );
}