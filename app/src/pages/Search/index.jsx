import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import '../../styles/global.css'
import { useState } from 'react';

export function Search() {
    const [userName, setUserName] = useState('nome');
    
    return (
        <div className='bg-slate-900 text-white flex flex-col gap-5 items-center w-fit h-fit p-4 rounded-md m-auto mt-16'>
            <h1 className='font-sans text-4xl font-bold'>GitHub Stalker</h1>
            <figure className='flex flex-col items-center'>
                <img className='animate-bounce w-[110px] h-[110px]' src="/GithubLogo.svg" alt="..." />
                <figcaption className='text-lg'>Pulando de alegria pra estalkear</figcaption>
            </figure>
            <form action={`/${userName}/stalking/${userName}`} method="get">
                <h2 className='text-xl font-sans font-light'>Nome de Usuário</h2>
                <div className='flex gap-2'>
                    <Input  handleChange={e => setUserName(e)} placeholder='digite o nome de usuário'/>
                    <Button name='search'/>
                </div>
            </form>
        </div>
    );
}