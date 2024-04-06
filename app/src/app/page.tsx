'use client'
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState('');
  
  function onChangeUserName(username: string) {
    setUsername(username);
  }

  return (
    <div className="flex flex-col gap-4 p-4 w-1/2">
      <label>Nome de Usuário</label>
      <input placeholder="Digite o nome de usuário" onChange={e => onChangeUserName(e.target.value)} />
      <Link href={`/home/${username}`}>Buscar</Link>
    </div>
  )
}
