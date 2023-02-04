import '../../styles/global.css';

export function Footer() {

    return (
        <footer 
            className='bg-slate-900 
                     text-white 
                     w-screen 
                     h-[25vh] 
                     flex 
                     flex-col 
                     gap-4 
                     items-center 
                     p-4'
        >
            <div 
                className='w-full 
                           flex 
                           gap-2 
                           items-center 
                           justify-center'
            >
                <hr className='w-1/2 h-2'/>
                <div 
                    className='flex 
                               items-center'
                >
                    <a 
                        className='rounded-md 
                                   transition 
                                   hover:bg-green-500' 
                        href="https://www.instagram.com/_carlos_eduardo_mg/" 
                        target='_blank'>
                        <img src="/icons/InstagramLogo.svg" alt="" />
                    </a>
                    <a 
                        className='rounded-md 
                                   transition 
                                   hover:bg-green-500' 
                        href="https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/" 
                        target='_blank'>
                        <img src="/icons/LinkedinLogo.svg" alt="" />
                    </a>
                    <a 
                        className='rounded-md 
                                   transition 
                                   hover:bg-green-500' 
                        href="mailto:cemg.the.dev@gmail.com">
                        <img src="/icons/Envelope.svg" alt="" />
                    </a>
                </div>
                <hr className='w-1/2 h-2'/>
            </div>
            <h1 className='text-2xl font-bold'>GitHub Stalker</h1>
            <a
                className='transition 
                         hover:text-green-500 
                         font-semibold' 
                href="https://github.com/cemgthedev/GitHub-Stalker/blob/main/LICENSE" 
                target='_blank'
            >
                Copyright (c) 2023 Carlos Eduardo de Moura Gomes
            </a>
        </footer>
    );
    
}