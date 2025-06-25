import { cookies } from "next/headers";
import { verifyJwt } from "../../lib/auth";
import { redirect } from "next/navigation";
import type { JwtPayload } from "jsonwebtoken";

export default async function AdminPage() {
  const tokenStore = await cookies();
  const token = tokenStore.get("token")?.value;
  const user = token ? verifyJwt(token) as JwtPayload : null;
  /*
  if (!user || !user.isAdmin) {
    redirect("/login");
  }
  */

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Panel de Administración</h1>
      <p>Bienvenido administrador: {"Admin"}</p>
    </div>
  );
}