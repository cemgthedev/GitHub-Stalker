import '../../styles/global.css';

export type HeaderProps = {
    login: string,
    location: string,
    html_url: string,
    email: string,
    twitter_username: string
}

export function Header({ ...data }: HeaderProps) {
    
    return (
        <header 
            className='z-[999] 
                     bg-slate-900
                     w-screen 
                     flex 
                     items-center 
                     justify-between 
                     p-4'
        >
            {
                location != null &&
                <a 
                    title='pesquisar localização no google maps'
                    href={`https://www.google.com.br/maps/search/${ location }`} 
                    target='_blank' 
                    className='bg-slate-900 
                               flex 
                               gap-2 
                               items-center 
                               p-1 
                               rounded-md 
                               transition 
                               hover:bg-red-500' 
                >
                    <img src="/icons/MapPin.svg" alt="Cidade:" />
                    <h2 className='text-sans text-xl text-white'>{ data.location }</h2>
                </a>
            }
            <div className='flex gap-2'>
                {
                    data.html_url != null &&
                    <a 
                        title='pesquisar perfil no github' 
                        href={data.html_url} 
                        target='_blank'
                        className='bg-slate-900 
                                  rounded-md 
                                  transition 
                                  hover:bg-green-500'
                    >
                        <img src="/icons/GithubLogo.svg" alt="Github" />
                    </a>
                }
                {
                    data.email != null &&
                    <a 
                        title='mandar um email'
                        href={`mailto:${data.email}`} 
                        className='bg-slate-900 
                                  rounded-md 
                                  transition 
                                  hover:bg-green-500' 
                    >
                        <img src="/icons/EnvelopeSimple.svg" alt="Email" />
                    </a>
                }
                {
                    data.twitter_username != null &&
                    <a 
                        title='pesquisar perfil no twitter'
                        href={`https://twitter.com/${ data.twitter_username }`} 
                        target='_blank'
                        className='bg-slate-900 
                                  rounded-md 
                                  transition 
                                  hover:bg-green-500' 
                    >
                        <img src="/icons/TwitterLogo.svg" alt="Twitter" />
                    </a>
                }
            </div>
            <div className='flex gap-2'>
                <a 
                    title='voltar para a home'
                    href={`/${ data.login }/stalking/${ data.login }`} 
                    className='bg-slate-900 
                              rounded-md 
                              transition 
                              hover:bg-sky-500' 
                >
                    <img src="/icons/HouseLine.svg" alt="Home" />
                </a>
                <a 
                    title='voltar para a página de pesquisa' 
                    href='/'
                    className='bg-slate-900 
                              rounded-md 
                              transition 
                              hover:bg-sky-500' 
                >
                    <img src="/icons/MagnifyingGlass.svg" alt="Search" />
                </a>
            </div>
        </header>
    );
}