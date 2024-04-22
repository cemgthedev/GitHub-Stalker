"use client"
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { useFiltersContext } from "@/contexts/filters";
import { useUserContext } from "@/contexts/user";
import { GithubIcon, LoadingIcon, RemoveIcon, SearchIcon, StalkedIcon, StalkingNotFoundIcon } from "@/icons";
import { FollowerProps } from "@/types/models";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

export function StalkingPage() {
    const { stalking, setStalking, updateStalkingLocalStorage, searchUser } = useUserContext();
    const { queryStalking, setQueryStalking, loading, setLoading } = useFiltersContext();
    const [selectedStalked, setSelectedStalked] = useState<FollowerProps | null>(null);
    const [stalkedName, setStalkedName] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        if(stalkedName === "") {
            setQueryStalking(stalking);
        } else {
            setQueryStalking(queryStalking.filter((stalked) => stalked.login.toLocaleLowerCase().includes(stalkedName.toLocaleLowerCase())));
        }
        setLoading(false);
    }, [stalkedName])

    useEffect(() => {
        updateStalkingLocalStorage(stalking);
        setQueryStalking(stalking);
    }, [stalking])

    function searchFollowerName(name: string) {
        setStalkedName(name);
    }

    function handleSelectedStalked(stalked: FollowerProps | null) {
        setSelectedStalked(stalked);
    }

    async function handleSearchUser(username: string) {
        await searchUser(username);
    }

    async function handleRemoveStalked() {
        setStalking(stalking.filter((stalked) => stalked.login !== selectedStalked?.login));
        setSelectedStalked(null);
    }
    
    return (
        <main className="flex pt-4 justify-center h-screen dark:bg-zinc-950 duration-300">
            <div className="bg-zinc-950 dark:bg-indigo-600 flex flex-col p-8 gap-4 rounded-lg h-fit max-h-[85vh] w-1/2 max-lg:w-4/6 max-md:w-11/12 duration-300">
                <div className="flex px-2 items-center bg-white rounded-[4px] border-2 border-transparent hover:border-cyan-500 has-[:focus]:border-cyan-400 dark:hover:border-zinc-950 dark:has-[:focus]:border-zinc-700 duration-150">
                    <SearchIcon size={28} fill="black"/>
                    <Input 
                        placeholder="Buscar stalkeado pelo nome de usuário" 
                        className="border-none"
                        onChange={(e) => searchFollowerName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                        <StalkedIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                        <Label size="sm" className="text-slate-50">Stalkeados</Label>
                    </div>
                    {
                        loading ? (
                            <div className="flex justify-center items-center gap-2">
                                <LoadingIcon fill="#white" size={28} className="animate-spin"/>
                                <Label size="xs" className="text-slate-50">Carregando</Label>
                            </div>
                        ) : (
                            queryStalking.length > 0 ? (
                                <div className="max-h-[65vh] pb-4 flex flex-wrap gap-4 overflow-y-auto scrollbar-hide">
                                    {
                                        queryStalking.map((stalked) => (
                                            <Card key={stalked.login} variant="horizontal" className="relative gap-2 items-center w-full max-md:flex-col">
                                                <Card.Header>
                                                    <Image
                                                        src={stalked.avatar_url}
                                                        alt="..."
                                                        width={128}
                                                        height={128}
                                                        className="rounded-full"
                                                    />
                                                </Card.Header>
                                                <Card.Body className="w-full">
                                                    <Label size="xs" className="max-md:text-center">{stalked.login}</Label>
                                                    <div className="flex gap-2">
                                                        <Button style="dark" onClick={() => handleSearchUser(stalked.login)}>
                                                            <SearchIcon fill="white" size={24} className="w-[24px] h-[24px]"/>
                                                            <Label size="xs">Stalkear</Label>
                                                        </Button>
                                                        <Link href={stalked.html_url} target="_blank" className="w-full flex gap-2 justify-center items-center rounded-[4px] bg-indigo-500 hover:bg-indigo-400 dark:bg-cyan-500 dark:hover:bg-cyan-400 duration-150" >
                                                            <GithubIcon fill="white" size={24} className="w-[24px] h-[24px]"/>
                                                            <Label size="xs" className="text-slate-50">GitHub</Label>
                                                        </Link>
                                                    </div>
                                                    <Button className="w-fit absolute top-2 right-2 group" onClick={() => handleSelectedStalked(stalked)}>
                                                        <RemoveIcon fill="#ef4444" size={28} className="w-[28px] h-[28px] group-hover:fill-red-400"/>
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        ))
                                    }
                                </div>
                            ) : (
                                <div className="flex justify-center items-center gap-2 animate-pulse">
                                    <StalkingNotFoundIcon fill="white" size={28}/>
                                    <Text className="text-center text-slate-50">Nenhum stalkeado encontrado</Text>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            {
                selectedStalked && (
                    <div className="flex justify-center items-center py-4 fixed inset-0 w-screen h-screen bg-white dark:bg-zinc-950 z-[999] overflow-y-auto scrollbar-hide">
                        <div className="bg-zinc-950 dark:bg-indigo-600 flex flex-col p-8 gap-4 rounded-lg h-fit w-2/5 max-md:w-11/12">
                            <div className="flex flex-col items-center gap-4">
                                <Card className="bg-transparent items-center p-0 gap-2">
                                    <Card.Header>
                                        <Image
                                            src={selectedStalked.avatar_url}
                                            alt="..."
                                            width={128}
                                            height={128}
                                            className="rounded-full"
                                        />
                                    </Card.Header>
                                    <Card.Body>
                                        <Label className="text-slate-50 max-lg:text-center">{selectedStalked.login}</Label>
                                    </Card.Body>
                                </Card>
                                <div className="w-full flex flex-col gap-2">
                                    <Label size="xs" className="text-slate-50 text-center">Deseja mesmo remover este usuário da lista de stalkeados?</Label>
                                    <div className="w-full flex gap-2">
                                        <Button style="danger" onClick={() => handleSelectedStalked(null)}>Cancelar</Button>
                                        <Button style="success" onClick={() => handleRemoveStalked()}>Confirmar</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </main>
    );
}