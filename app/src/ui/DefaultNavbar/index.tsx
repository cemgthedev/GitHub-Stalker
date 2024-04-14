"use client"
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Navbar } from "@/components/Navbar";
import { useUserContext } from "@/contexts/user";
import { CloseMenu, FollowersIcon, HomeIcon, OpenMenu, RepositoriesIcon, SearchIcon, StalkedIcon } from "@/icons";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export function DefaultNavbar() {
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
  const {setUser} = useUserContext();
  const router = useRouter();

  function handleSetUser() {
    setUser(null);
  }

  function handleOpenResponsiveMenu() {
    setOpenResponsiveMenu(!openResponsiveMenu);
  }

  return (
    <Navbar className="sticky top-0 h-[10vh]" style='dark'>
      <Heading>GitHub Stalker</Heading>
      <Navbar.Menu reponsive>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Button className="p-0 font-semibold" onClick={() => router.push('/') }>
            <HomeIcon fill="white" size={28} className="group-hover:fill-zinc-950 duration-150"/>
            Home
          </Button>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Link href={'/repositories'} className="flex items-center gap-1 font-semibold">
            <RepositoriesIcon fill="white" size={28} className="group-hover:fill-zinc-950 duration-150"/>
            Repositórios
          </Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Link href={'/followers'} className="flex items-center gap-1 font-semibold" >
            <FollowersIcon fill="white" size={28} className="group-hover:fill-zinc-950 duration-150"/>
            Seguidores
          </Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Button 
            className="p-0 font-semibold" 
            onClick={handleSetUser}
          >
            <SearchIcon fill="white" size={28} className="group-hover:fill-zinc-950 duration-150"/>
            Pesquisar
          </Button>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Link href={'/stalkeados'} className="flex items-center gap-1 font-semibold" >
            <StalkedIcon fill="white" size={28} className="group-hover:fill-zinc-950 duration-150"/>
            Stalkeados
          </Link>
        </Navbar.MenuItem>
      </Navbar.Menu>
      <Navbar.ResponsiveMenu>
        <Navbar.ResponsiveMenuItem>
          {
            openResponsiveMenu ?
            <Button style={'transparent'} onClick={handleOpenResponsiveMenu} className="group">
              <CloseMenu fill="white" size={28} className="relative group-hover:fill-zinc-950"/>
            </Button>:
            <Button style={'transparent'} onClick={handleOpenResponsiveMenu} className="group">
              <OpenMenu fill="white" size={28} className="relative group-hover:fill-zinc-950"/>
            </Button>
          }
          {
            openResponsiveMenu &&
            <div className="bg-slate-50 absolute top-16 right-16 p-4 list-none rounded-lg animate-dropdown">
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Button className="p-0 font-semibold justify-start" onClick={() => router.push('/') }>
                  <HomeIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Home
                </Button>
              </Navbar.MenuItem>
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Link href={'/repositories'} className="flex items-center justify-start gap-1 font-semibold">
                  <RepositoriesIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Repositórios
                </Link>
              </Navbar.MenuItem>
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Link href={'/followers'} className="flex items-center justify-start gap-1 font-semibold" >
                  <FollowersIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Seguidores
                </Link>
              </Navbar.MenuItem>
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Button 
                  className="p-0 font-semibold justify-start" 
                  onClick={handleSetUser}
                >
                  <SearchIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Pesquisar
                </Button>
              </Navbar.MenuItem>
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Link href={'/stalkeados'} className="flex items-center justify-start gap-1 font-semibold" >
                  <StalkedIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Stalkeados
                </Link>
              </Navbar.MenuItem>
            </div>
          }
        </Navbar.ResponsiveMenuItem>
      </Navbar.ResponsiveMenu>
    </Navbar>
  );
}