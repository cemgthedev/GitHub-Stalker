"use client"
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { useFiltersContext } from "@/contexts/filters";
import { useUserContext } from "@/contexts/user";
import { ClosePopUpIcon, CreatedAtIcon, DescriptionIcon, LinkIcon, LoadingIcon, RepositoriesIcon, RepositoriesNotFoundIcon, SearchIcon, StackIcon, UpdatedAtIcon } from "@/icons";
import { RepositorieProps } from "@/types/models";
import { getDate } from "@/utils/getDate";
import { getTime } from "@/utils/getTime";
import Link from "next/link";
import { useEffect, useState } from "react";

export function RepositoriesPage() {
    const { repositories } = useUserContext();
    const { queryRepositories, setQueryRepositories, loading, setLoading } = useFiltersContext();
    const [selectedRepository, setSelectedRepository] = useState<RepositorieProps | null>(null);
    const [repositoryName, setRepositoryName] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        if(repositoryName === "") {
            setQueryRepositories(repositories);
        } else {
            setQueryRepositories(repositories.filter((repository) => repository.name.toLocaleLowerCase().includes(repositoryName.toLocaleLowerCase())));
        }
        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repositoryName, repositories])

    function searchRepositoryName(name: string) {
        setRepositoryName(name);
    }

    function handleSelectedRepository(repository: RepositorieProps | null) {
        setSelectedRepository(repository);
    }

    return (
        <main className="flex py-4 px-2 justify-center h-screen overscroll-y-auto dark:bg-zinc-950 duration-300">
            <div className="bg-zinc-950 dark:bg-indigo-600 flex flex-col p-8 gap-4 rounded-lg h-fit w-1/2 max-lg:w-4/6 max-md:w-11/12 max-md:p-6 duration-300">
                <div className="flex px-2 items-center bg-white rounded-[4px] border-2 border-transparent hover:border-cyan-500 has-[:focus]:border-cyan-400 dark:hover:border-zinc-950 dark:has-[:focus]:border-zinc-700 duration-150">
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
                    <div className="bg-slate-50 rounded-lg px-4 pb-4 max-h-[67vh] overflow-y-auto scrollbar-hide">
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
                                                    <div className="flex justify-between p-4 gap-2">
                                                        <Label size="xs" className="w-1/3 text-center max-lg:w-[128px] max-md:w-[64px] max-md:text-xs">Nome</Label>
                                                        <Label size="xs" className="w-1/3 text-center max-md:text-xs">Data de Criação</Label>
                                                        <Label size="xs" className="w-1/3 text-center max-md:text-xs">Data de Atualização</Label>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <hr className="border-none mb-2"/>
                                        <tbody>
                                            {
                                                queryRepositories.map((repository) => (
                                                    <tr key={repository.id} className="border-2 border-zinc-950 cursor-pointer hover:bg-cyan-500 hover:text-slate-50 duration-300" onClick={() => handleSelectedRepository(repository)}>
                                                        <td>
                                                            <div className="flex justify-between p-4 gap-2">
                                                                <Text className="text-center w-1/3 text-nowrap overflow-hidden text-ellipsis max-lg:w-[128px] max-md:w-[64px] max-md:text-xs">{repository.name}</Text>
                                                                <Text className="text-center w-1/3 max-md:text-xs">{getDate(repository.created_at)}</Text>
                                                                <Text className="text-center w-1/3 max-md:text-xs">{getDate(repository.updated_at)}</Text>
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
            {
                selectedRepository && (
                    <div className="flex justify-center items-center py-4 fixed inset-0 w-screen h-screen bg-white dark:bg-zinc-950 z-[999] max-lg:items-start overflow-y-auto scrollbar-hide">
                        <div className="relative bg-zinc-950 dark:bg-indigo-600 flex flex-col p-8 gap-4 rounded-lg h-fit w-1/2 max-lg:w-4/6 max-md:w-11/12 max-md:p-6 animate-popup">
                            <Button className="w-fit absolute top-1 right-1 group" onClick={() => handleSelectedRepository(null)}>
                                <ClosePopUpIcon fill="white" size={28} className="group-hover:fill-red-500"/>
                            </Button>
                            <Label className="text-slate-50 text-center">{selectedRepository.name}</Label>
                            <div className="flex justify-between">
                                <Card variant="horizontal" className="bg-transparent p-0 gap-2 max-lg:flex-col max-lg:items-center">
                                    <Card.Header>
                                        <CreatedAtIcon fill="white" size={64}/>
                                    </Card.Header>
                                    <Card.Body>
                                        <Label className="text-slate-50 max-lg:text-center">Data de Criação</Label>
                                        <Text className="text-slate-50 max-lg:text-center">{getDate(selectedRepository.created_at)} as {getTime(selectedRepository.created_at)}</Text>
                                    </Card.Body>
                                </Card>
                                <Card variant="horizontal" className="bg-transparent p-0 gap-2 max-lg:flex-col max-lg:items-center">
                                    <Card.Header>
                                        <UpdatedAtIcon fill="white" size={64}/>
                                    </Card.Header>
                                    <Card.Body>
                                        <Label className="text-slate-50 max-lg:text-center">Data de Atualização</Label>
                                        <Text className="text-slate-50 max-lg:text-center">{getDate(selectedRepository.updated_at)} as {getTime(selectedRepository.updated_at)}</Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            {
                                selectedRepository.language && (
                                    <div className="flex gap-2 items-center">
                                        <StackIcon fill="white" size={28}/>
                                        <Label size="sm" className="text-slate-50">{selectedRepository.language}</Label>
                                    </div>
                                )
                            }
                            {
                                selectedRepository.description && (
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-1">
                                            <DescriptionIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                                            <Label size="sm" className="text-slate-50">Bio</Label>
                                        </div>
                                        <Text className="w-full text-slate-50 text-center">"{selectedRepository.description}"</Text>
                                    </div>
                                )
                            }
                            <div className="flex gap-4 justify-center items-center">
                                <Card className="bg-transparent items-center p-0 gap-2 w-1/3">
                                    <Card.Header>
                                        <div className="flex justify-center items-center bg-emerald-500 w-[96px] h-[96px] max-md:w-[64px] max-md:h-[64px] rounded-full">
                                            <Heading className="text-slate-50 max-md:text-2xl">{selectedRepository.watchers_count}</Heading>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Label size="sm" className="text-slate-50 max-md:text-lg">Visualizações</Label>
                                    </Card.Body>
                                </Card>
                                <Card className="bg-transparent items-center p-0 gap-2 w-1/3">
                                    <Card.Header>
                                        <div className="flex justify-center items-center bg-emerald-500 w-[96px] h-[96px] max-md:w-[64px] max-md:h-[64px] rounded-full">
                                            <Heading className="text-slate-50 max-md:text-2xl">{selectedRepository.stargazers_count}</Heading>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Label size="sm" className="text-slate-50 max-md:text-lg">Estrelas</Label>
                                    </Card.Body>
                                </Card>
                                <Card className="bg-transparent items-center p-0 gap-2 w-1/3">
                                    <Card.Header>
                                        <div className="flex justify-center items-center bg-emerald-500 w-[96px] h-[96px] max-md:w-[64px] max-md:h-[64px] rounded-full">
                                            <Heading className="text-slate-50 max-md:text-2xl">{selectedRepository.forks_count}</Heading>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Label size="sm" className="text-slate-50 max-md:text-lg">Forks</Label>
                                    </Card.Body>
                                </Card>
                            </div>
                            <Link href={selectedRepository.html_url} className="flex items-center gap-2 p-2 border-2 border-slate-50 rounded-[4px] hover:bg-indigo-500 hover:border-transparent dark:hover:bg-cyan-500 duration-150">
                                <LinkIcon fill="white" size={28}/>
                                <Label size="xs" className="text-slate-50">Visualizar repositório no GitHub</Label>
                            </Link>
                        </div>
                    </div>
                )
            }
        </main>
    );
}