"use client"
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Navbar } from "@/components/Navbar";
import { useUserContext } from "@/contexts/user";
import { CloseMenu, DarkThemeIcon, FollowersIcon, HomeIcon, LightThemeIcon, OpenMenu, RepositoriesIcon, SearchIcon, StalkedIcon } from "@/icons";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function DefaultNavbar() {
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
  const {setUser, darkTheme, setDarkTheme} = useUserContext();
  const router = useRouter();

  function handleCleanUser() {
    setUser(null);
  }

  function handleOpenResponsiveMenu() {
    setOpenResponsiveMenu(!openResponsiveMenu);
  }

  function handleThemeDark() {
    setDarkTheme(!darkTheme);
  }

  return (
    <Navbar className="sticky top-0 z-[999] border-b-2 border-b-white dark:bg-indigo-600" style='dark'>
      <Heading className="max-md:text-2xl">GitHub Stalker</Heading>
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
            onClick={handleCleanUser}
          >
            <SearchIcon fill="white" size={28} className="group-hover:fill-zinc-950 duration-150"/>
            Pesquisar
          </Button>
        </Navbar.MenuItem>
        <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
          <Link href={'/stalking'} className="flex items-center gap-1 font-semibold" >
            <StalkedIcon fill="white" size={28} className="group-hover:fill-zinc-950 duration-150"/>
            Stalkeados
          </Link>
        </Navbar.MenuItem>
      </Navbar.Menu>
      <Navbar.ResponsiveMenu>
        <Button style="primary" className="p-1 w-[72px] rounded-full border-2 border-slate-50" onClick={handleThemeDark}>
          {
            darkTheme ? (
              <DarkThemeIcon fill="white" size={24} className="w-[24px] h-[24px] ml-auto animate-dark-icon"/>
            ) : (
              <LightThemeIcon fill="white" size={24} className="w-[24px] h-[24px] mr-auto animate-light-icon"/>
            )
          }
        </Button>
        <Navbar.ResponsiveMenuItem>
          {
            openResponsiveMenu ?
            <Button onClick={handleOpenResponsiveMenu} className={twMerge("group hover:bg-slate-50", openResponsiveMenu && "bg-slate-50")}>
              <CloseMenu fill="white" size={28} className={twMerge("relative group-hover:fill-zinc-950", openResponsiveMenu && "fill-zinc-950")}/>
            </Button>:
            <Button style={'transparent'} onClick={handleOpenResponsiveMenu} className="group">
              <OpenMenu fill="white" size={28} className={twMerge("relative group-hover:fill-zinc-950", openResponsiveMenu && "fill-zinc-950")}/>
            </Button>
          }
          {
            openResponsiveMenu &&
            <div className="bg-slate-50 border-2 border-zinc-200 absolute top-16 right-16 p-4 list-none rounded-lg animate-dropdown">
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Button 
                  className="p-0 font-semibold justify-start" 
                  onClick={() => {
                    handleOpenResponsiveMenu()
                    router.push('/')
                  }}
                >
                  <HomeIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Home
                </Button>
              </Navbar.MenuItem>
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Link onClick={handleOpenResponsiveMenu} href={'/repositories'} className="flex items-center justify-start gap-1 font-semibold">
                  <RepositoriesIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Repositórios
                </Link>
              </Navbar.MenuItem>
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Link onClick={handleOpenResponsiveMenu} href={'/followers'} className="flex items-center justify-start gap-1 font-semibold" >
                  <FollowersIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Seguidores
                </Link>
              </Navbar.MenuItem>
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Button 
                  className="p-0 font-semibold justify-start" 
                  onClick={handleCleanUser}
                >
                  <SearchIcon fill="#09090b" size={28} className="group-hover:fill-slate-50 duration-150"/>
                  Pesquisar
                </Button>
              </Navbar.MenuItem>
              <Navbar.MenuItem style='light' className="rounded-[4px] p-2 group">
                <Link onClick={handleOpenResponsiveMenu} href={'/stalking'} className="flex items-center justify-start gap-1 font-semibold" >
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