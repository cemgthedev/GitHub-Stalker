import '../../styles/global.css'

export function NotFound() {
    return (
        <div className='bg-slate-900 flex flex-col items-center gap-4 justify-center w-fit h-fit m-auto mt-32 rounded-md p-4'>
            <figure className='flex flex-col items-center'>
                <img className='animate-pulse w-[256px] h-[256px]' src="/icons/SmileySad.svg" alt=""/>
                <figcaption className='text-white text-2xl font-bold'>Usuário não encontrado</figcaption>
            </figure>
            <a className='bg-gray-50 text-gray-900 text-center w-full p-2 rounded-[64px] transition hover:bg-sky-500' href='/'>Voltar a página de pesquisa</a>
        </div>
    );
}