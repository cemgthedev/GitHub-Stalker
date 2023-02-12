import { useState } from 'react';

import '../../styles/global.css'

import { getDate } from '../../functions/dateFormatter'

import { PopUp, PopUpProps, RepositoryProps } from '../PopUp';

const listColors = [
    'bg-green-300',
    'bg-green-500',
    'bg-green-700',
    'bg-sky-300',
    'bg-sky-500',
    'bg-sky-700',
    'bg-red-300',
    'bg-red-500',
    'bg-red-700',
    'bg-amber-300',
    'bg-amber-500',
    'bg-amber-700',
    'bg-indigo-300',
    'bg-indigo-500',
    'bg-indigo-700',
    'bg-fuchsia-300',
    'bg-fuchsia-500',
    'bg-fuchsia-700',
    'bg-cyan-300',
    'bg-cyan-500',
    'bg-cyan-700'
]

export type TableProps = {
    list: RepositoryProps[]
}

export function Table({ list }: TableProps) {
    let [openPopUp, setOpenPopUp] = useState<number | undefined>();

    const setOfTechnologies = new Set<string>();
    list.map(item => {
        setOfTechnologies.add(item.language);
    })

    return (
        <div 
            className='text-xl 
                      font-semibold 
                    text-white 
                      flex 
                      flex-col 
                      gap-4 
                      p-8 
                      bg-slate-900 
                      w-[50vw] 
                      min-w-[300px] 
                      rounded-md'
        >
            <div 
                className='flex 
                          items-center 
                          gap-2'
            >
                <img src="/icons/BracketsCurly.svg" alt=""/>
                <h1>Tecnologias</h1>
            </div>
            <div 
                className='flex 
                          flex-wrap 
                          gap-2'
            >
                {
                    Array.from(setOfTechnologies).map(languageName => (
                        <h1 
                            key={languageName} 
                            className={`select-none 
                                        flex 
                                        p-1 
                                        cursor-pointer 
                                        rounded-md 
                                        transition 
                                        hover:bg-opacity-60 
                                        ${listColors[Math.floor(Math.random() * listColors.length)]}`} 
                        >
                            { languageName }
                        </h1>
                    ))
                }
            </div>
            <div className='flex 
                            items-center 
                            gap-2'
            >
                <img src="/icons/Folders.svg" alt=""/>
                <h1>Repositórios</h1>
            </div>
            <div 
                className='bg-gray-50 
                        text-gray-900 
                        break-words 
                        flex 
                        flex-col 
                        gap-2 
                        p-4 
                        rounded-md'
            >
                <div className='select-none 
                               flex 
                               justify-between 
                               p-2'
                >
                        <h1 
                            className='w-1/3 
                                       p-1'
                        >
                            Nome
                        </h1>
                        <h1 
                            className='w-1/3 
                                       text-center 
                                       p-1'
                        >
                            Criação
                        </h1>
                        <h1 
                            className='w-1/3 
                                       text-center 
                                       p-1'
                        >
                            Última Atualização
                        </h1>
                </div>
                <div 
                    id='table' 
                    className='min-h-0 
                               max-h-[25vh] 
                               overflow-auto 
                               scrollbar-hide 
                               flex 
                               flex-col 
                               gap-4 
                               p-2'
                >
                    {
                        list.map((item) => (
                            <>
                                <button 
                                    key={item.id} 
                                    onClick={() => setOpenPopUp(item.id)} 
                                    className='select-none 
                                               cursor-pointer 
                                               flex 
                                               justify-between 
                                               rounded-md 
                                               ring-1 
                                               ring-gray-900 
                                               transition 
                                               hover:bg-green-500 
                                               hover:shadow-md 
                                               hover:shadow-gray-900'
                                >
                                    <h1 
                                        className='w-1/3 
                                                   text-lg 
                                                   font-medium 
                                                   p-1'
                                    >
                                        { item.name }
                                    </h1>
                                    <h1 
                                        className='w-1/3 
                                                   text-base 
                                                   font-medium 
                                                   flex 
                                                   justify-center 
                                                   items-center 
                                                   p-1'
                                    >
                                        { getDate(item.created_at) }
                                    </h1>
                                    <h1 
                                        className='w-1/3 
                                                   text-base 
                                                   font-medium 
                                                   flex 
                                                   justify-center 
                                                   items-center 
                                                   p-1'
                                    >
                                        { getDate(item.updated_at) }
                                    </h1>
                                </button>
                                <PopUp 
                                    data = {
                                        {
                                            id : item.id,
                                            openPopUp: openPopUp,
                                            setOpenPopUp: setOpenPopUp,
                                            repository: item
                                        } as PopUpProps
                                    }
                                />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
    
}