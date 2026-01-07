import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between p-4 border-b">
      <h1 className="font-bold">Todos App</h1>
      {user && <Button onClick={logout}>Sign Out</Button>}
    </nav>
  );
}
