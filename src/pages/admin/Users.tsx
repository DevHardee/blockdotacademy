import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { User, Mail, Shield, Trash2, Search } from "lucide-react";

const MOCK_USERS = [
  { id: 1, name: "Alice Johnson", email: "alice@mail.com", role: "admin" },
  { id: 2, name: "Michael Doe", email: "michael@mail.com", role: "user" },
  { id: 3, name: "Sarah Lee", email: "sarah@mail.com", role: "user" },
  { id: 4, name: "David Park", email: "david@mail.com", role: "user" },
];

export default function AdminUsers() {
  const [users, setUsers] = useState(MOCK_USERS);
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <MaxWidthWrapper className="space-y-8 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manage Users</h1>
          <p className="text-sm text-muted-foreground">View and manage all users</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search users..."
            className="border bg-background pl-10 pr-4 py-2 rounded-xl text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Card className="p-4 bg-card-gradient border-border/30 shadow-card">
        <div className="grid grid-cols-1 divide-y divide-border/20">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center gap-3">
                <User className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-muted-foreground text-sm flex items-center gap-1">
                    <Mail className="h-4 w-4" /> {user.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Badge
                  className={
                    user.role === "admin"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary/20 text-secondary-foreground"
                  }
                >
                  {user.role}
                </Badge>

                <Button size="sm" variant="outline">
                  <Shield className="h-4 w-4 mr-1" /> Role
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(user.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </MaxWidthWrapper>
  );
}
