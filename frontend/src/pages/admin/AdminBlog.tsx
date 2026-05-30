import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
    Plus,
    Search,
    Filter,
    Edit,
    Trash2,
    Calendar,
    User,
    Layout
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";

// Mock data (in a real app, this would come from an API)
const mockPosts = [
    {
        id: 1,
        title: "The Future of Ethereum Staking in 2024",
        category: "Research",
        date: "May 15, 2024",
        author: "Alex Rivers",
        status: "Published"
    },
    {
        id: 2,
        title: "Mastering Smart Contract Security",
        category: "Security",
        date: "May 12, 2024",
        author: "Sarah Chen",
        status: "Published"
    },
    {
        id: 3,
        title: "Introduction to Zero-Knowledge Proofs",
        category: "Development",
        date: "May 10, 2024",
        author: "Marcus Thorne",
        status: "Draft"
    }
];

const AdminBlog = () => {
    const [posts] = useState(mockPosts);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = posts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <MaxWidthWrapper className="space-y-12 pb-20 selection:bg-primary/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 uppercase">Chronicles</h1>
                    <p className="text-lg text-white/40 font-medium">Manage your blog posts and editorial content</p>
                </div>
                <Link to="/admin/blog/add">
                    <Button className="rounded-xl px-8 h-12 bg-linear-to-r from-primary to-accent hover:brightness-110 text-white font-bold uppercase tracking-widest text-[10px] border-0 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        <Plus className="mr-2 h-4 w-4" /> New Post
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#0a0a0a] p-4 rounded-[2rem] border border-white/5">
                <div className="relative flex-1 group w-full md:max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Search posts..."
                        className="bg-white/5 border-white/5 rounded-2xl h-14 pl-12 text-white font-medium focus:border-primary/50 focus:ring-0 placeholder:text-white/20"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <Button variant="outline" className="bg-white/5 border-white/5 rounded-2xl h-14 px-6 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 border-white/10 transition-all">
                        <Filter className="h-4 w-4 mr-2" />
                        Categories
                    </Button>
                    <Badge className="bg-accent/10 text-accent border-accent/20 rounded-full px-4 h-14 flex items-center text-[10px] font-black tracking-[0.2em] uppercase">
                        {filteredPosts.length} Posts
                    </Badge>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {filteredPosts.map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <Card className="group bg-[#0a0a0a] border-white/5 hover:border-white/10 transition-all duration-300 rounded-[1.5rem] overflow-hidden p-6">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Layout className="h-6 w-6 text-primary" />
                                </div>

                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <Badge className={post.status === "Published" ? "bg-emerald-500/10 text-emerald-500 border-0" : "bg-amber-500/10 text-amber-500 border-0"}>
                                            {post.status}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/30">
                                        <span className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {post.date}</span>
                                        <span className="flex items-center gap-2"><User className="h-3 w-3" /> {post.author}</span>
                                        <span className="flex items-center gap-2"><Badge variant="outline" className="text-[8px] border-white/10">{post.category}</Badge></span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon" className="h-10 w-10 bg-white/5 hover:bg-primary/10 hover:text-primary rounded-xl border border-white/5 transition-all">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-10 w-10 bg-white/5 hover:bg-red-500/10 hover:text-red-500 rounded-xl border border-white/5 transition-all"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="py-32 text-center">
                    <Layout className="h-16 w-16 text-white/10 mx-auto mb-6" />
                    <p className="text-xl font-bold text-white/20">No articles found</p>
                </div>
            )}
        </MaxWidthWrapper>
    );
};

export default AdminBlog;
