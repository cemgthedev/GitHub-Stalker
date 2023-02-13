import '../../styles/global.css';

export type FooterProps = {
    hrefInstagram: string,
    hrefLinkedin: string,
    hrefEmail: string,
    projectName: string,
    licenceLabel: string,
    hrefLicence: string
}

export function Footer({ ...props }: FooterProps) {

    return (
        <footer 
            className='bg-slate-900 
                     text-white 
                     w-screen 
                     h-fit 
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
                        href={ props.hrefInstagram }
                        target='_blank'>
                        <img src="/icons/InstagramLogo.svg" alt="" />
                    </a>
                    <a 
                        className='rounded-md 
                                   transition 
                                   hover:bg-green-500' 
                        href={ props.hrefLinkedin }
                        target='_blank'>
                        <img src="/icons/LinkedinLogo.svg" alt="" />
                    </a>
                    <a 
                        className='rounded-md 
                                   transition 
                                   hover:bg-green-500' 
                        href={ props.hrefEmail }>
                        <img src="/icons/Envelope.svg" alt="" />
                    </a>
                </div>
                <hr className='w-1/2 h-2'/>
            </div>
            <h1 className='text-2xl font-bold'>{ props.projectName }</h1>
            <a
                className='transition 
                         hover:text-green-500 
                         font-semibold' 
                href={ props.hrefLicence } 
                target='_blank'
            >
                { props.licenceLabel }
            </a>
        </footer>
    );
    
}