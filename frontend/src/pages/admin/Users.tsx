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
    <MaxWidthWrapper className="space-y-12 pb-20 selection:bg-primary/30">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">User Management</h1>
          <p className="text-lg text-white/40 font-medium">Manage your community and platform permissions</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-xl px-6 h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-[10px]">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="rounded-xl px-6 h-12 bg-linear-to-r from-primary to-accent hover:brightness-110 text-white font-bold uppercase tracking-widest text-[10px] border-0 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <UserPlus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search users by name or email..."
            className="bg-white/5 border-white/5 rounded-2xl h-14 pl-12 text-white font-medium focus:border-primary/50 focus:ring-0 placeholder:text-white/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <Button variant="outline" className="bg-white/5 border-white/5 rounded-2xl h-14 px-6 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 border-white/10 transition-all">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 h-14 flex items-center text-[10px] font-black tracking-[0.2em] uppercase">
            {filteredUsers.length} Users
          </Badge>
        </div>
      </div>

      <Card className="bg-[#0a0a0a] border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">User</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Status</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Role</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Joined</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.map((user, i) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-white/5 shadow-xl">
                        <AvatarFallback className="bg-linear-to-br from-primary/20 to-accent/20 text-primary font-black">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-white group-hover:text-primary transition-colors">{user.name}</div>
                        <div className="text-xs text-white/30 flex items-center gap-2 mt-1">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <Badge
                      className={cn(
                        "rounded-full px-3 py-1 text-[8px] font-black uppercase tracking-widest",
                        user.status === "Active" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                          user.status === "Pending" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                            "bg-red-500/10 text-red-500 border-red-500/20"
                      )}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <Badge className={cn("rounded-full px-3 py-1 text-[8px] font-black uppercase tracking-widest", user.role === "admin" ? "bg-primary/10 text-primary border-primary/20" : "bg-white/5 text-white/30 border-white/10")}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-sm font-medium text-white/30">
                    {user.joined}
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Button variant="ghost" size="icon" className="h-10 w-10 bg-white/5 hover:bg-primary/10 hover:text-primary rounded-xl transition-all border border-white/5">
                        <Shield className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 bg-white/5 hover:bg-red-500/10 hover:text-red-500 rounded-xl transition-all border border-white/5"
                        onClick={() => handleDelete(user.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-10 w-10 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all">
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
          <div className="py-32 text-center">
            <User className="h-16 w-16 text-white/10 mx-auto mb-6" />
            <p className="text-xl font-bold text-white/20">No members found</p>
          </div>
        )}
      </Card>
    </MaxWidthWrapper>
  );
};

export default AdminUsers;
