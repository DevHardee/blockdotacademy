import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { User, Mail, Shield, Trash2, Search, Filter, MoreVertical, UserPlus, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const MOCK_USERS = [
  { id: 1, name: "Alice Johnson", email: "alice@mail.com", role: "admin", status: "Active", joined: "Jan 12, 2024" },
  { id: 2, name: "Michael Doe", email: "michael@mail.com", role: "user", status: "Active", joined: "Feb 05, 2024" },
  { id: 3, name: "Sarah Lee", email: "sarah@mail.com", role: "user", status: "Inactive", joined: "Mar 18, 2024" },
  { id: 4, name: "David Park", email: "david@mail.com", role: "user", status: "Active", joined: "Apr 22, 2024" },
  { id: 5, name: "Emma Wilson", email: "emma@mail.com", role: "user", status: "Pending", joined: "May 10, 2024" },
];

const AdminUsers = () => {
  const [users, setUsers] = useState(MOCK_USERS);
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <MaxWidthWrapper className="space-y-8 pb-14">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-sm text-muted-foreground">Manage your community and platform permissions</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <UserPlus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users by name or email..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Badge variant="secondary" className="px-4 py-2">
            {filteredUsers.length} Users Found
          </Badge>
        </div>
      </div>

      <Card className="border border-border/40 shadow-sm overflow-hidden bg-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30 border-b border-border/20">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">User</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Role</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Joined</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/20">
              {filteredUsers.map((user, i) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-muted/10 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-medium",
                        user.status === "Active" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                          user.status === "Pending" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                            "bg-red-500/10 text-red-500 border-red-500/20"
                      )}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                        {user.role}
                      </Badge>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                        <Shield className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 hover:bg-red-500/10 hover:text-red-500"
                        onClick={() => handleDelete(user.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="py-20 text-center">
            <User className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-30" />
            <p className="text-muted-foreground">No users found matching your criteria</p>
          </div>
        )}
      </Card>
    </MaxWidthWrapper>
  );
};

export default AdminUsers;
