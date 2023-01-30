import '../../styles/global.css'

export function Header(props) {
    console.log(props.location);
    console.log(props.html_url);
    console.log(props.email);
    console.log(props.twitter_username);
    

    return (
        <header className='w-screen flex items-center justify-between p-4'>
            {
                props.location != null &&
                <a title='pesquisar localização no google maps' className='bg-slate-900 flex gap-2 items-center p-1 rounded-md hover:bg-red-600' href={`https://www.google.com.br/maps/search/${props.location}`} target='_blank'>
                    <img src="/icons/MapPin.svg" alt="Cidade:" />
                    <h2 className='text-sans text-xl text-white'>{props.location}</h2>
                </a>
            }
            <div className='flex gap-2'>
                {
                    props.html_url != null &&
                    <a title='pesquisar perfil no github' className='bg-slate-900 rounded-md hover:bg-green-500' href={props.html_url} target='_blank'>
                        <img src="/icons/GithubLogo.svg" alt="Github" />
                    </a>
                }
                {
                    props.email != null &&
                    <a title='mandar um email' className='bg-slate-900 rounded-md hover:bg-green-500' href={`mailto:${props.email}`}>
                        <img src="/icons/EnvelopeSimple.svg" alt="Email" />
                    </a>
                }
                {
                    props.twitter_username != null &&
                    <a title='pesquisar perfil no twitter' className='bg-slate-900 rounded-md hover:bg-green-500' href={`https://twitter.com/${props.twitter_username}`} target='_blank'>
                        <img src="/icons/TwitterLogo.svg" alt="Twitter" />
                    </a>
                }
            </div>
            <a title='voltar para a home' href={window.location.href} className='bg-slate-900 flex gap-2 items-center rounded-md hover:bg-sky-500'>
                        <img src="/icons/HouseLine.svg" alt="Twitter" />
            </a>
        </header>
    );
}