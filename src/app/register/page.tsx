"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const register = async (username: string, password: string) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Fallo el registro");
    return data;
  };

  const handleRegister = async () => {
    setError("");
    try {
      const user = await register(username, password);
      console.log("Usuario creado:", user);
      router.push("/client");
    } catch (err: any) {
      setError(err.message || "Error al registrarse");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Registrarse</h1>

      <input
        className="border p-2 w-64 rounded"
        placeholder="Usuario"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 w-64 rounded"
        placeholder="Contraseña"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="text-red-600">{error}</p>}

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleRegister}
      >
        Registrarse
      </button>
    </main>
  );
}
