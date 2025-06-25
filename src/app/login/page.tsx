"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const isAdmin = username === "admin" && password === "admin";
    /*
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, isAdmin }),
    });
    const data = await res.json();
    if (data.token) {
      document.cookie = `token=${data.token}; path=/`;
      router.push("/admin");
    }
    */
    if (isAdmin){
      redirect("/admin");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <input className="border p-2" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
      <input className="border p-2" placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>Ingresar</button>
    </main>
  );
}
