import '../../styles/global.css'

export function Header(props) {
    console.log(props.location);
    console.log(props.html_url);
    console.log(props.email);
    console.log(props.twitter_username);
    

    return (
        <header className='flex items-center justify-between p-2'>
            {
                props.location != null &&
                <div className='bg-slate-700 flex gap-2 items-center p-1 rounded-md'>
                    <img src="/icons/MapPin.svg" alt="Cidade:" />
                    <h2 className='text-sans text-xl text-white'>{props.location}</h2>
                </div>
            }
            <div className='flex gap-2'>
                {
                    props.html_url != null &&
                    <a href={props.html_url} target='_blank'>
                        <img src="/icons/GithubLogo.svg" alt="Github" />
                    </a>
                }
                {
                    props.email != null &&
                    <a href={`mailto:${props.email}`}>
                        <img src="/icons/EnvelopeSimple.svg" alt="Email" />
                    </a>
                }
                {
                    props.twitter_username != null &&
                    <a href="" target='_blank'>
                        <img src="/icons/TwitterLogo.svg" alt="Twitter" />
                    </a>
                }
            </div>
        </header>
    );
}