"use client"
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { useFiltersContext } from "@/contexts/filters";
import { useUserContext } from "@/contexts/user";
import { LoadingIcon, RepositoriesIcon, RepositoriesNotFoundIcon, SearchIcon } from "@/icons";
import { getDate } from "@/utils/getDate";
import { useEffect, useState } from "react";

export function RepositoriesPage() {
    const { repositories } = useUserContext();
    const { queryRepositories, setQueryRepositories, loading, setLoading } = useFiltersContext();
    const [repositoryName, setRepositoryName] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        if(repositoryName === "") {
            setQueryRepositories(repositories);
        } else {
            setQueryRepositories(repositories.filter((repository) => repository.name.toLocaleLowerCase().includes(repositoryName.toLocaleLowerCase())));
        }
        setLoading(false);
    }, [repositoryName])

    function searchRepositoryName(name: string) {
        setRepositoryName(name);
    }

    return (
        <main className="flex flex-col gap-8 pt-4 items-center h-[90vh] overscroll-y-auto -z-10">
            <div className="bg-zinc-950 flex flex-col p-8 gap-4 rounded-lg h-fit max-h-[85vh] w-1/2 max-lg:w-4/6 max-md:w-11/12">
                <div className="flex px-2 items-center bg-white rounded-[4px] border-2 border-transparent hover:border-cyan-500 has-[:focus]:border-cyan-400">
                    <SearchIcon size={28} fill="black"/>
                    <Input 
                        placeholder="Buscar repositório pelo nome" 
                        className="border-none"
                        onChange={(e) => searchRepositoryName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <RepositoriesIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
              <Label size="sm" className="text-slate-50">Repositórios</Label>
            </div>
            <div className="bg-slate-50 rounded-lg px-4 pb-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
                {
                    loading ? (
                        <div className="flex justify-center items-center gap-2 pt-4">
                            <LoadingIcon fill="#09090b" size={28} className="animate-spin"/>
                            <Label size="xs">Carregando</Label>
                        </div>
                    ) : (
                        queryRepositories.length > 0 ? (
                            <table className="w-full">
                                <thead className="sticky top-0 bg-slate-50 ring-2 ring-slate-50">
                                    <tr>
                                        <th>
                                            <div className="flex justify-between p-4">
                                                <Label size="xs" className="w-1/3 text-left">Nome</Label>
                                                <Label size="xs" className="w-1/3">Data de Criação</Label>
                                                <Label size="xs" className="w-1/3">Data de Atualização</Label>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <hr className="border-none mb-2"/>
                                <tbody>
                                    {
                                        queryRepositories.map((repository) => (
                                            <tr className="border-2 border-zinc-950 cursor-pointer hover:bg-cyan-500 hover:text-slate-50 duration-300" onClick={() => {}}>
                                                <td>
                                                    <div className="flex justify-between p-4">
                                                        <Text className="w-1/3 text-nowrap overflow-hidden text-ellipsis max-lg:w-[128px] max-md:w-[64px]">{repository.name}</Text>
                                                        <Text className="text-center w-1/3">{getDate(repository.created_at)}</Text>
                                                        <Text className="text-center w-1/3">{getDate(repository.updated_at)}</Text>
                                                    </div>
                                                </td>
                                            </tr>  
                                        ))
                                    }
                                </tbody>
                            </table> 
                        ) : (
                            <div className="flex justify-center items-center gap-2 pt-4 animate-pulse">
                                <RepositoriesNotFoundIcon fill="#09090b" size={28}/>
                                <Text className="text-center">Nenhum repositório encontrado</Text>
                            </div>
                        )
                    )
                }
            </div>
          </div>
            </div>
        </main>
    );
}