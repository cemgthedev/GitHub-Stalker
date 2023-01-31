import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import '../../styles/global.css'
import { useState } from 'react';

export function Search() {
    const [userName, setUserName] = useState('nome');
    
    return (
        <div className='bg-slate-900 text-white flex flex-col gap-4 items-center w-fit h-fit p-4 rounded-md m-auto mt-16'>
            <h1 className='font-sans text-4xl font-bold'>GitHub Stalker</h1>
            <img className='w-[88px] h-[100px]' src="/GithubLogo.svg" alt="..." />
            <form action={`/${userName}/stalking/${userName}`} method="get">
                <h2 className='text-xl font-sans font-light'>User Name</h2>
                <div className='flex gap-2'>
                    <Input  handleChange={e => setUserName(e)} placeholder='enter username'/>
                    <Button name='search'/>
                </div>
            </form>
        </div>
    );
}