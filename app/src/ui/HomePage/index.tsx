"use client"
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { useUserContext } from "@/contexts/user";
import { BioIcon, CreatedAtIcon, EmailIcon, GithubIcon, MapIcon, SocialMidiaIcon, StackIcon, TwitterIcon, UpdatedAtIcon } from "@/icons";
import { getDate } from "@/utils/getDate";
import { getLenguages } from "@/utils/getLenguages";
import { getTime } from "@/utils/getTime";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HomePage() {
  const { user, repositories } = useUserContext();
  const [listLanguages, setLanguages] = useState<string[]>();

  useEffect(() => {
    const list = getLenguages(repositories);
    setLanguages(list);
  }, [repositories])

  return (
      <main className="flex flex-col gap-8 pt-4 items-center h-screen overflow-y-auto dark:bg-zinc-950 duration-300">
        <div className="bg-zinc-950 dark:bg-indigo-600 flex flex-col p-8 gap-4 rounded-lg h-fit w-1/2 max-lg:w-4/6 max-md:w-11/12 duration-300">
          <Card variant="horizontal" className="bg-transparent p-0 max-md:flex-col max-md:items-center w-full">
            <Card.Header>
              <Image
                  src={user?.avatar_url || ""}
                  alt="..."
                  width={128}
                  height={128}
                  className="min-w-[128px] min-h-[128px] rounded-full border-2 border-slate-50"
              />
            </Card.Header>
            <Card.Body className="justify-center">
              <Label className="text-slate-50 max-md:text-center">{user?.name}</Label>
              <Text className="text-slate-50 max-md:text-center">{user?.login}</Text>
            </Card.Body>
          </Card>
          <div className="flex justify-between">
            <Card variant="horizontal" className="bg-transparent p-0 gap-2 max-lg:flex-col max-lg:items-center">
              <Card.Header>
                <CreatedAtIcon fill="white" size={64}/>
              </Card.Header>
              <Card.Body>
                <Label size="sm" className="text-slate-50 max-lg:text-center">Data de Criação do Perfil</Label>
                <Text className="text-slate-50 max-lg:text-center">{getDate(user?.created_at || "")} as {getTime(user?.created_at || "")}</Text>
              </Card.Body>
            </Card>
            <Card variant="horizontal" className="bg-transparent p-0 gap-2 max-lg:flex-col max-lg:items-center">
              <Card.Header>
                <UpdatedAtIcon fill="white" size={64}/>
              </Card.Header>
              <Card.Body>
                <Label size="sm" className="text-slate-50 max-lg:text-center">Data de Atualização do Perfil</Label>
                <Text className="text-slate-50 max-lg:text-center">{getDate(user?.updated_at || "")} as {getTime(user?.updated_at || "")}</Text>
              </Card.Body>
            </Card>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <StackIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
              <Label size="sm" className="text-slate-50">Tecnologias</Label>
            </div>
            <div className="flex gap-1 flex-wrap">
              {
                listLanguages?.map((language) => (
                  <Badge key={language} style={'primary-outline'} className="dark:bg-slate-50 dark:border-transparent dark:text-zinc-950 dark:hover:bg-slate-200 duration-150">
                    {language}
                  </Badge>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <SocialMidiaIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
              <Label size="sm" className="text-slate-50">Redes Sociais</Label>
            </div>
            <div className="m-auto flex flex-col gap-1 items-center w-fit">
              <Link href={user?.html_url || ""} target="_blank" className="w-full flex items-center py-1 px-2 gap-2 border-2 border-slate-50 rounded-[4px] hover:bg-indigo-500 hover:border-transparent dark:hover:bg-cyan-400 duration-150">
                <GithubIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                <Label size="xs" className="text-slate-50">Visualizar GitHub</Label>
              </Link>
              {
                user?.twitter_username &&
                <Link href={`https://twitter.com/${ user.twitter_username }`} target="_blank" className="w-full flex items-center py-1 px-2 gap-2 border-2 border-slate-50 rounded-[4px] hover:bg-indigo-500 hover:border-transparent dark:hover:bg-cyan-400 duration-150">
                  <TwitterIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                  <Label size="xs" className="text-slate-50">Visualizar Twitter</Label>
                </Link>
              }
              {
                user?.email &&
                <Link href={`mailto:${user.email}`} target="_blank" className="w-full flex items-center py-1 px-2 gap-2 border-2 border-slate-50 rounded-[4px] hover:bg-indigo-500 hover:border-transparent dark:hover:bg-cyan-400 duration-150">
                  <EmailIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                  <Label size="xs" className="text-slate-50">Enviar Email</Label>
                </Link>
              }
            </div>
          </div>
          {
            user?.bio &&
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <BioIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
                <Label size="sm" className="text-slate-50">Bio</Label>
              </div>
              <Text className="w-full text-slate-50 text-center">"{user.bio}"</Text>
            </div>
          }
          <Link href={`https://www.google.com.br/maps/search/${ user?.location }`} target="_blank" className="flex items-center py-1 px-2 gap-1 border-2 border-slate-50 rounded-[4px] hover:bg-red-500 hover:border-transparent duration-300">
            <MapIcon fill="white" size={28} className="min-w-[28px] min-h-[28px]"/>
            <Label size="xs" className="text-slate-50">Pesquisar {user?.location} no Google Maps</Label>
          </Link>
        </div>
      </main>
  );
}
