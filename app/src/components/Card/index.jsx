import '../../styles/global.css';

import {getDate, getTime} from '../../functions/dateFormatter';

export function Card({ data }) {

    return (
        <div 
            className='bg-slate-900
                     text-white
                       text-xl 
                       font-semibold
                       w-[50vw] 
                       min-w-[300px]
                       flex 
                       flex-col 
                       gap-4  
                       p-8 
                       rounded-md'
        >
            <div 
                className='flex 
                           items-center 
                           gap-4 
                           ring-1 
                           ring-gray-50 
                           p-2 
                           rounded-md 
                           transition 
                           hover:ring-sky-500
                         hover:text-sky-500'
            >
                <img 
                    className='w-[128px] 
                               h-[128px] 
                               rounded-full' 
                    src={ data.avatar_url } 
                    alt="..."
                />
                <h1>{ data.name }</h1>
            </div>

            <div 
                className='flex 
                           flex-col 
                           gap-2 
                           justify-center'
                >
                <div className='flex 
                                items-center 
                                gap-2'
                >
                    <img src="/icons/Fingerprint.svg" alt=""/>
                    <h1>Bio</h1>
                </div>
                <h1 
                    className='min-h-[48px] 
                             bg-gray-50
                             text-gray-900 
                             text-base 
                             font-medium 
                             p-2 
                             rounded-md 
                             transition 
                             hover:bg-opacity-80'
                >
                    { data.bio }
                </h1>
            </div>
            <div 
                className='flex 
                           justify-between'
            >
                <figure 
                    className='flex 
                               flex-col 
                               items-center'
                >
                    <img 
                        className='w-[128px] 
                                   h-[128px] 
                                   min-w-min 
                                   rounded-lg 
                                   transition 
                                   hover:bg-green-500 
                                   hover:shadow-md 
                                   hover:shadow-gray-900' 
                        src="/icons/CalendarPlus.svg" 
                        alt="..."
                    />
                    <figcaption 
                        className='flex 
                                   flex-col 
                                   gap-1 
                                   text-center'
                    >
                        <h1>Criação do Perfil</h1>
                        <h1 
                            className='text-base 
                                       font-medium'
                        >
                            Dia { getDate(data.created_at) } às { getTime(data.created_at) } hr
                        </h1>
                    </figcaption>
                </figure>

                <figure 
                    className='flex 
                               flex-col 
                               items-center'
                >
                    <img 
                        className='w-[128px] 
                                   h-[128px] 
                                   min-w-min 
                                   rounded-lg 
                                   transition 
                                   hover:bg-sky-500 
                                   hover:shadow-md 
                                   hover:shadow-gray-900' 
                        src="/icons/CalendarCheck.svg" 
                        alt="..."
                    />
                    <figcaption 
                        className='flex 
                                   flex-col 
                                   gap-1 
                                   text-center'
                    >
                        <h1>Última Atualização do Perfil</h1>
                        <h1 
                            className='text-base 
                                       font-medium'
                        >
                            Dia { getDate(data.updated_at) } às { getTime(data.updated_at) } hr
                        </h1>
                    </figcaption>
                </figure>
            </div>

            <div 
                className='flex 
                           gap-4 
                           justify-between'
            >
                <figure 
                    className='flex 
                               flex-col 
                               gap-2 
                               items-center 
                               w-[30%] 
                               text-center'
                >
                    <div 
                        className='
                            bg-green-700 
                            animate-pulse 
                            w-[128px] 
                            h-[128px] 
                            text-4xl 
                            flex 
                            items-center 
                            justify-center 
                            rounded-full'
                    >
                        { data.public_repos }
                    </div>
                    <figcaption>Repositórios Públicos</figcaption>
                </figure>

                <figure 
                    className='flex 
                               flex-col 
                               gap-2 
                               items-center 
                               w-[30%] 
                               text-center'
                >
                    <div 
                        className='bg-green-500 
                                   animate-pulse 
                                   w-[128px] 
                                   h-[128px] 
                                   text-4xl 
                                   flex 
                                   items-center 
                                   justify-center 
                                   rounded-full'
                    >
                        { data.followers }
                    </div>
                    <figcaption>Seguidores</figcaption>
                </figure>

                <figure 
                    className='flex 
                               flex-col 
                               gap-2 
                               items-center 
                               w-[30%] 
                               text-center'
                >
                    <div 
                        className='bg-green-300 
                                   animate-pulse 
                                   w-[128px] 
                                   h-[128px] 
                                   text-4xl 
                                   flex 
                                   items-center 
                                   justify-center 
                                   rounded-full'
                    >
                        { data.following }
                    </div>
                    <figcaption>Seguindo</figcaption>
                </figure>
            </div>
        </div>
    );

}