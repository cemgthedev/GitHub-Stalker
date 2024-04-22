"use client"
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { useFiltersContext } from "@/contexts/filters";
import { useUserContext } from "@/contexts/user";
import { FollowersIcon, FollowersNotFoundIcon, GithubIcon, LoadingIcon, SearchIcon } from "@/icons";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

export function FollowersPage() {
    const { followers, searchUser } = useUserContext();
    const { queryFollowers, setQueryFollowers, loading, setLoading } = useFiltersContext();
    const [followerName, setFollowerName] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        if(followerName === "") {
            setQueryFollowers(followers);
        } else {
            setQueryFollowers(followers.filter((follower) => follower.login.toLocaleLowerCase().includes(followerName.toLocaleLowerCase())));
        }
        setLoading(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [followerName, followers])

    function searchFollowerName(name: string) {
        setFollowerName(name);
    }

    async function handleSearchUser(username: string) {
        await searchUser(username);
    }
    
    return (
        <main className="flex pt-4 justify-center h-screen dark:bg-zinc-950 duration-300">
            <div className="bg-zinc-950 dark:bg-indigo-600 flex flex-col p-8 gap-4 rounded-lg h-fit max-h-[85vh] w-1/2 max-lg:w-4/6 max-md:w-11/12 duration-300">
                <div className="flex px-2 items-center bg-white rounded-[4px] border-2 border-transparent hover:border-cyan-500 has-[:focus]:border-cyan-400 dark:hover:border-zinc-950 dark:has-[:focus]:border-zinc-700 duration-150">
                    <SearchIcon size={28} fill="black"/>
                    <Input 
                        placeholder="Buscar seguidor pelo nome de usuário" 
                        className="border-none"
                        onChange={(e) => searchFollowerName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                        <FollowersIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                        <Label size="sm" className="text-slate-50">Seguidores</Label>
                    </div>
                    {
                        loading ? (
                            <div className="flex justify-center items-center gap-2">
                                <LoadingIcon fill="#white" size={28} className="animate-spin"/>
                                <Label size="xs" className="text-slate-50">Carregando</Label>
                            </div>
                        ) : (
                            queryFollowers.length > 0 ? (
                                <div className="max-h-[65vh] pb-4 flex flex-wrap gap-4 overflow-y-auto scrollbar-hide">
                                    {
                                        queryFollowers.map((follower) => (
                                            <Card key={follower.login} variant="horizontal" className="gap-2 items-center w-full max-md:flex-col">
                                                <Card.Header>
                                                    <Image
                                                        src={follower.avatar_url}
                                                        alt="..."
                                                        width={128}
                                                        height={128}
                                                        className="rounded-full"
                                                    />
                                                </Card.Header>
                                                <Card.Body className="w-full">
                                                    <Label size="xs" className="max-md:text-center">{follower.login}</Label>
                                                    <div className="flex gap-2">
                                                        <Button style="dark" onClick={() => handleSearchUser(follower.login)}>
                                                            <SearchIcon fill="white" size={24} className="w-[24px] h-[24px]"/>
                                                            <Label size="xs">Stalkear</Label>
                                                        </Button>
                                                        <Link href={follower.html_url} target="_blank" className="w-full flex gap-2 justify-center items-center rounded-[4px] bg-indigo-500 hover:bg-indigo-400 dark:bg-cyan-500 dark:hover:bg-cyan-400 duration-150" >
                                                            <GithubIcon fill="white" size={24} className="w-[24px] h-[24px]"/>
                                                            <Label size="xs" className="text-slate-50">GitHub</Label>
                                                        </Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        ))
                                    }
                                </div>
                            ) : (
                                <div className="flex justify-center items-center gap-2 animate-pulse">
                                    <FollowersNotFoundIcon fill="white" size={28}/>
                                    <Text className="text-center text-slate-50">Nenhum seguidor encontrado</Text>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </main>
    );
}
