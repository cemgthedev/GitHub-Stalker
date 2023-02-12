import { Dialog } from '@headlessui/react';

import '../../styles/global.css';

import {getDate, getTime} from '../../functions/dateFormatter';

export type RepositoryProps = {
    id: number,
    html_url: string,
    language: string,
    name: string,
    description: string,
    created_at: string,
    updated_at: string,
    stargazers_count: number,
    watchers_count: number,
    forks_count: number
}

export type PopUpProps = {
    id: number,
    openPopUp: number,
    setOpenPopUp: Function,
    repository: RepositoryProps
}

export function PopUp({ ...data }: PopUpProps) {
    
    return (
        <Dialog
        open = {data.id == data.openPopUp}
        onClose = {() => data.setOpenPopUp(null)}
        className='bg-white 
                    fixed 
                    inset-0 
                    z-[999] 
                    pb-8 
                    overflow-auto 
                    scrollbar-hide'
        >
            <Dialog.Panel 
                className='relative 
                            text-xl 
                            font-semibold 
                            text-white 
                            bg-slate-900 
                            flex 
                            flex-col 
                            gap-4 
                            m-auto 
                            mt-8 
                            w-[50vw] 
                            min-w-[300px] 
                            p-8 
                            rounded-md'
            >
                <button 
                    className='bg-red-700 
                            text-white 
                            hover:bg-red-500 
                            flex 
                            items-center 
                            justify-center 
                            absolute 
                            top-[-10px] 
                            right-[-10px] 
                            rounded-full 
                            w-[32px] 
                            h-[32px]' 
                    onClick={() => data.setOpenPopUp(null)}
                >
                    X
                </button>
                <a 
                    href={data.repository.html_url} 
                    target='_blank' 
                    className='flex 
                                items-center 
                                gap-2 
                                ring-1 
                                ring-white 
                                rounded-md 
                                transition 
                                hover:ring-green-500 
                                hover:text-green-500'
                >
                    <img src="/icons/Link.svg" alt=""/>
                    <h1>{ data.repository.name }</h1>
                </a>
                <div 
                    className='flex 
                                items-center 
                                gap-2'
                >
                    <img src="/icons/BracketsCurly.svg" alt=""/>
                    <h1>{ data.repository.language }</h1>
                </div>
                <div 
                    className='flex 
                                flex-col 
                                gap-2 
                                justify-center'
                >
                    <div className='flex items-center gap-2'>
                        <img src="/icons/Article.svg" alt=""/>
                        <h1>Descrição</h1>
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
                        { data.repository.description }
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
                            src="/icons/CalendarPlus.svg" 
                            alt="..."
                            className='w-[128px] 
                                        h-[128px] 
                                        min-w-min 
                                        rounded-lg 
                                        transition 
                                        hover:bg-green-500 
                                        hover:shadow-md 
                                        hover:shadow-gray-900'  
                        />
                        <figcaption 
                            className='flex 
                                        flex-col 
                                        gap-1 
                                        text-center'
                        >
                            <h1>Criação do Repositório</h1>
                            <h1 
                                className='text-base 
                                            font-medium'
                            >
                                Dia { getDate(data.repository.created_at) } às { getTime(data.repository.created_at) } hr
                            </h1>
                        </figcaption>
                    </figure>
                    <figure 
                        className='flex 
                                    flex-col 
                                    items-center'
                    >
                        <img 
                            src="/icons/CalendarCheck.svg" 
                            alt="..."
                            className='w-[128px] 
                                        h-[128px] 
                                        min-w-min 
                                        rounded-lg 
                                        transition 
                                        hover:bg-sky-500 
                                        hover:shadow-md 
                                        hover:shadow-gray-900'  
                        />
                        <figcaption className='flex flex-col gap-1 text-center'>
                            <h1>Última Atualização do Repositório</h1>
                            <h1 className='text-base font-medium'>Dia {getDate(data.repository.updated_at)} às {getTime(data.repository.updated_at)} hr</h1>
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
                            className='bg-green-700 
                                        animate-pulse 
                                        w-[128px] 
                                        h-[128px] 
                                        text-4xl 
                                        flex 
                                        items-center 
                                        justify-center 
                                        rounded-full'
                        >
                            { data.repository.stargazers_count }
                        </div>
                        <figcaption>Estrelas</figcaption>
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
                            { data.repository.watchers_count }
                        </div>
                        <figcaption>Visualizações</figcaption>
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
                            { data.repository.forks_count }
                        </div>
                        <figcaption>Forks</figcaption>
                    </figure>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
}