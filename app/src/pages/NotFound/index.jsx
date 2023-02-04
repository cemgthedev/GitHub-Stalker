import '../../styles/global.css';

export function NotFound() {
    
    return (
        <div 
            className='bg-slate-900 
                      flex 
                      flex-col 
                      items-center 
                      gap-4 
                      justify-center 
                      w-fit 
                      h-fit 
                      m-auto 
                      mt-32 
                      rounded-md 
                      p-4'
        >
            <figure 
                className='flex 
                           flex-col 
                           items-center'
            >
                <img 
                    src="/icons/SmileySad.svg" 
                    alt=""
                    className='animate-pulse 
                               w-[256px] 
                               h-[256px]' 
                />
                <figcaption 
                    className='text-white 
                               text-2xl 
                               font-bold'
                >
                    Usuário não encontrado
                </figcaption>
            </figure>
            <a 
                href='/'
                className='bg-gray-50 
                         text-gray-900 
                         text-center 
                         w-full 
                         p-2 
                         rounded-[64px] 
                         transition 
                         hover:bg-sky-500' 
            >
                    Voltar a página de pesquisa
            </a>
        </div>
    );

}