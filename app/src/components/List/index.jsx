import '../../styles/global.css'

export function List({ handleChange, list }) {
    return (
        <div className='bg-slate-900 text-xl font-semibold text-white flex flex-col gap-4 w-[50vw] min-w-[300px] p-8 rounded-md'>
            <div className='flex gap-2'>
                <img src="/icons/UsersThree.svg" alt=""/>
                <h1>Seguidores</h1>
            </div>
            <div className='h-[50vh] flex flex-col gap-4 overflow-y-auto scrollbar-hide'>
                {
                    list.map(item => {
                        return (
                            <div onClick={e => handleChange(item.login)} key={item.id} className='hover:cursor-pointer bg-gray-50 text-slate-900 flex items-center gap-4 p-2 rounded-md hover:bg-sky-500'>
                                <img className='w-[128px] h-[128px] rounded-[100%]' src={item.avatar_url} alt="..." />
                                <h1 className='select-none w-1/3 break-words'>{item.login}</h1>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}