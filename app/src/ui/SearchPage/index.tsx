'use client'
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { useUserContext } from "@/contexts/user";
import { NotFound, SearchIcon } from "@/icons";
import Image from "next/image";
import { useState } from "react";

export function SearchPage() {
  const { searchUser, userNotFound } = useUserContext();
  const [username, setUsername] = useState('');
  
  function onChangeUserName(username: string) {
    setUsername(username);
  }

  async function handleSearchUser() {
    await searchUser(username);
  }

  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen">
      <div className="relative bg-zinc-950 flex flex-col items-center p-4 gap-4 rounded-lg h-fit w-fit">
        {
          userNotFound &&
          <div className="absolute -bottom-14 bg-zinc-950 flex p-2 gap-2 justify-center items-center w-full rounded-lg overflow-hidden animate-toast">
            <NotFound className="min-w-[32px] min-h-[32px]" fill="#ef4444" size={32}/>
            <Text className="text-white whitespace-nowrap">usuário não encontrado</Text>
          </div>
        }
        <Heading className="text-white">GitHub Stalker</Heading>
        <Card className="p-0 gap-0 items-center bg-transparent">
          <Card.Header className="pt-8">
            <Image 
                src="/assets/images/GithubLogo.svg"
                alt="..."
                width={112}
                height={112}
                className="animate-bounce"
            />
          </Card.Header>
          <Card.Body className="border-t-2 border-white">
            <Text className="text-white">pulando de alegria para stalkear</Text>
          </Card.Body>
        </Card>
        <div className="flex flex-col gap-2">
          <Label size="sm" className="text-white">Nome de Usuário</Label>
          <div className="flex gap-3">
            <Input className=" hover:border-emerald-500 focus:border-emerald-400" placeholder="Digite o nome de usuário" onChange={e => onChangeUserName(e.target.value)} />
            <Button style='success' className="w-fit" disabled={userNotFound} onClick={handleSearchUser}>
              <SearchIcon size={28} fill="white"/>
              Pesquisar
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}