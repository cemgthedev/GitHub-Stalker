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
    <Navbar className="sticky top-0 mb-4" style='dark'>
      <Heading>GitHub Stalker</Heading>
      <Navbar.Menu reponsive>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Button className="p-0 font-semibold" onClick={() => router.push('/') }>
            <HomeIcon fill="white" size={32} className="group-hover:fill-zinc-950 duration-150"/>
            Home
          </Button>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Link href={'/repositories'} className="flex items-center gap-1 font-semibold">
            <RepositoriesIcon fill="white" size={32} className="group-hover:fill-zinc-950 duration-150"/>
            Repositórios
          </Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Link href={'/followers'} className="flex items-center gap-1 font-semibold" >
            <FollowersIcon fill="white" size={32} className="group-hover:fill-zinc-950 duration-150"/>
            Seguidores
          </Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Button 
            className="p-0 font-semibold" 
            onClick={handleSetUser}
          >
            <SearchIcon fill="white" size={32} className="group-hover:fill-zinc-950 duration-150"/>
            Pesquisar
          </Button>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Link href={'/stalkeados'} className="flex items-center gap-1 font-semibold" >
            <StalkedIcon fill="white" size={32} className="group-hover:fill-zinc-950 duration-150"/>
            Stalkeados
          </Link>
        </Navbar.MenuItem>
      </Navbar.Menu>
      <Navbar.ResponsiveMenu>
        <Navbar.ResponsiveMenuItem>
          {
            openResponsiveMenu ?
            <Button style={'transparent'} onClick={handleOpenResponsiveMenu}>
              <CloseMenu fill="white" size={32}/>
            </Button>:
            <Button style={'transparent'} onClick={handleOpenResponsiveMenu}>
              <OpenMenu fill="white" size={32}/>
            </Button>
          }
        </Navbar.ResponsiveMenuItem>
      </Navbar.ResponsiveMenu>
    </Navbar>
  );
}