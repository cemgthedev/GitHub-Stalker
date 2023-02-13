import { useState } from 'react';

import '../../styles/global.css';

import { Input, InputProps } from '../../components/Input'
import { Button, ButtonProps } from '../../components/Button'

export function Search() {

    const [userName, setUserName] = useState<string | undefined>();
    
    return (
        <div 
            className='bg-slate-900 
                    text-white 
                    flex 
                    flex-col 
                    gap-5 
                    items-center 
                    w-fit 
                    h-fit 
                    p-4 
                    rounded-md 
                    m-auto 
                    mt-16'
        >
            <h1 
                className='font-sans 
                          text-4xl 
                          font-bold'
            >
                GitHub Stalker
            </h1>
            <figure 
                className='flex 
                          flex-col 
                          items-center'
            >
                <img 
                    src="/GithubLogo.svg" 
                    alt="..." 
                    className='animate-bounce 
                               w-[110px] 
                               h-[110px]' 
                />
                <figcaption 
                    className='text-lg 
                               border-t-2 
                               border-t-white'
                >
                    pulando de alegria pra estalkear
                </figcaption>
            </figure>
            <form action={`/${userName}/stalking/${userName}`} method="get">
                <h2 
                    className='text-xl 
                               font-sans 
                               font-light'
                >
                    Nome de Usuário
                </h2>
                <div className='flex gap-2'>
                    <Input  
                        {...
                            {
                                handleChange: setUserName,
                                placeholder: 'digite o nome de usuário'
                            } as InputProps
                        }
                    />
                    <Button
                        {...
                            {
                                name: 'buscar'
                            } as ButtonProps
                        }
                    />
                </div>
            </form>
        </div>
    );
    
}