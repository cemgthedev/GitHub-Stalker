import '../../styles/global.css'

export function Table({list}) {
    function formattedDate(localDateTime) {
        return (new Date(localDateTime).toLocaleString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }));
    }

    return (
        <div className='text-xl font-semibold text-white flex flex-col gap-4 p-8 bg-slate-900 w-[50vw] min-w-[300px] rounded-md'>
            <div className='flex gap-2'>
                <img src="/icons/Folders.svg" alt=""/>
                <h1>Repositórios</h1>
            </div>
            <table className='bg-gray-50 text-gray-900 break-words flex flex-col gap-2 p-4 rounded-md'>
                <thead className='p-2'>
                    <tr className='select-none flex justify-between'>
                        <td className='w-1/3 p-1'>Nome</td>
                        <td className='w-1/3 text-center p-1'>Criação</td>
                        <td className='w-1/3 text-center p-1'>Última Atualização</td>
                    </tr>
                </thead>
                <hr className='bg-gray-900'/>
                <tbody className='h-[25vh] overflow-auto scrollbar-hide flex flex-col gap-4 p-2'>
                    {
                        list.map((item) => {
                            return (
                            <tr key={item.id} className='select-none flex justify-between rounded-md ring-1 ring-gray-900 hover:bg-green-500 hover:shadow-md hover:shadow-gray-900'>
                                <td className='w-1/3 text-lg font-medium p-1'>{item.name}</td>
                                <td className='w-1/3 text-base font-medium flex justify-center items-center p-1'>{formattedDate(item.created_at)}</td>
                                <td className='w-1/3 text-base font-medium flex justify-center items-center p-1'>{formattedDate(item.updated_at)}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}