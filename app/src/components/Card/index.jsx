import '../../styles/global.css'

export function Card({ data }) {
    return (
        <div className='min-w-[300px] text-xl font-semibold text-white bg-slate-700 flex flex-col gap-8 w-[50vw] p-8 rounded-md'>
            <div className='flex items-center gap-4 ring-1 ring-gray-50 p-2 rounded-md hover:shadow-gray-900 hover:shadow-md'>
                <img className='w-[128px] h-[128px] rounded-[100%]' src={data.avatar_url} alt="..." />
                <h1>{data.name}</h1>
            </div>
            <div className='flex flex-col gap-2 justify-center'>
                <h1>Bio</h1>
                <h1 className='bg-gray-50 text-gray-900 text-base font-medium p-2 rounded-md hover:shadow-gray-900 hover:shadow-md'>{data.bio}</h1>
            </div>
            <div className='flex justify-between'>
                <figure className='flex flex-col items-center'>
                    <img className='w-[128px] h-[128px]' src="/icons/CalendarPlus.svg" alt="..." />
                    <figcaption className='flex flex-col gap-1 text-center'>
                        <h1>Date de Criação do Perfil</h1>
                        <h1 className='text-base font-medium'>Dia {data.created_at_date} às {data.created_at_time} hr</h1>
                    </figcaption>
                </figure>
                <figure className='flex flex-col items-center'>
                    <img className='w-[128px] h-[128px]' src="/icons/CalendarCheck.svg" alt="..." />
                    <figcaption className='flex flex-col gap-1 text-center'>
                        <h1>Última Atualização do Perfil</h1>
                        <h1 className='text-base font-medium'>Dia {data.updated_at_date} às {data.update_at_time} hr</h1>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}