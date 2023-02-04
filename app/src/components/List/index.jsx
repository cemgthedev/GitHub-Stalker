import '../../styles/global.css'

export function List({ login, list }) {
    return (
        <div 
            className='bg-slate-900 
                      text-xl 
                      font-semibold 
                      text-white 
                      flex 
                      flex-col 
                      gap-4 
                      w-[50vw] 
                      min-w-[300px] 
                      p-8 
                      rounded-md'
        >
            <div className='flex items-center gap-2'>
                <img src="/icons/UsersThree.svg" alt=""/>
                <h1>Seguidores</h1>
            </div>
            <div 
                id='list' 
                className='min-h-0 
                          max-h-[75vh] 
                          flex 
                          flex-col 
                          gap-4 
                          overflow-y-auto 
                          scrollbar-hide'
            >
                {
                    list.map(item => (
                            <form 
                                key={item.id} 
                                action={`/${login}/stalking/${item.login}`} 
                                method="get"
                            >
                                <button 
                                    type='submit' 
                                    className='w-full 
                                              hover:cursor-pointer 
                                              bg-gray-50 
                                              text-slate-900 
                                              flex 
                                              items-center 
                                              gap-2 
                                              p-2 
                                              rounded-md 
                                              transition 
                                              hover:bg-sky-500'
                                >
                                    <img 
                                        src={item.avatar_url} 
                                        alt="..."
                                        className='w-[128px] 
                                                   h-[128px] 
                                                   rounded-full'  
                                    />
                                    <h1 
                                        className='select-none 
                                                   text-left 
                                                   w-1/3 
                                                   break-words'
                                    >
                                        { item.login }
                                    </h1>
                                </button>
                            </form>
                    ))
                }
            </div>
        </div>
    );
    
}