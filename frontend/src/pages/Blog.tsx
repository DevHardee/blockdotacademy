import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, ChevronRight, MessageSquare, User } from "lucide-react";
import { motion } from "motion/react";

const posts = [
    {
        id: 1,
        title: "The Future of Ethereum Staking in 2024",
        excerpt: "Discover the latest trends in Liquid Staking Tokens and how they are reshaping the DeFi landscape.",
        category: "Research",
        date: "May 15, 2024",
        author: "Alex Rivers",
        image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=800&auto=format&fit=crop",
        readTime: "8 min"
    },
    {
        id: 2,
        title: "Mastering Smart Contract Security",
        excerpt: "Learn the essential patterns for building robust and secure decentralized applications on EVM.",
        category: "Security",
        date: "May 12, 2024",
        author: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
        readTime: "12 min"
    },
    {
        id: 3,
        title: "Introduction to Zero-Knowledge Proofs",
        excerpt: "A beginner's guide to understanding how ZK-Proofs provide privacy and scalability for Web3.",
        category: "Development",
        date: "May 10, 2024",
        author: "Marcus Thorne",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop",
        readTime: "15 min"
    }
];

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-[#030303] py-24 text-white">
            <MaxWidthWrapper className="space-y-16">
                {/* Hero Section */}
                <div className="text-center space-y-6 max-w-3xl mx-auto pt-10">
                    <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1 text-[10px] font-black tracking-widest uppercase">
                        Insights & Knowledge
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight uppercase">
                        BLOCKDOT <span className="text-primary italic">CHRONICLES</span>
                    </h1>
                    <p className="text-lg text-white/40 font-medium leading-relaxed">
                        Stay ahead of the curve with deep dives into Web3 technology, market analysis, and the future of decentralized finance.
                    </p>
                </div>

                {/* Filter & Search */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#0a0a0a]/50 p-4 rounded-[2rem] border border-white/5 backdrop-blur-xl">
                    <div className="relative flex-1 group w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Find an article..."
                            className="bg-white/5 border-white/5 rounded-2xl h-14 pl-12 text-white font-medium focus:border-primary/50 focus:ring-0 placeholder:text-white/20"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
                        {["All", "Research", "Security", "Development", "Market"].map((cat) => (
                            <Button
                                key={cat}
                                variant="outline"
                                className={`rounded-xl h-10 px-6 border-white/5 font-bold uppercase tracking-widest text-[10px] whitespace-nowrap transition-all ${cat === "All" ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(41,98,255,0.4)]" : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"}`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="group bg-[#0a0a0a] border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/10 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-primary/5">
                                <div className="aspect-video overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-primary/90 backdrop-blur-md text-white border-0 rounded-lg px-3 py-1 text-[8px] font-black uppercase tracking-widest">
                                            {post.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-8 flex flex-col flex-1 space-y-6">
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="h-3 w-3" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-extrabold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-white/40 leading-relaxed line-clamp-3 font-medium">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-6 border-t border-white/5 mt-auto flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">
                                            {post.readTime} Read
                                        </span>
                                        <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-black uppercase tracking-widest text-[10px] flex items-center gap-2">
                                            Read More <ChevronRight className="h-3 w-3" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-primary/20 to-tertiary/5 p-12 md:p-20 border border-white/5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] -mr-48 -mt-48 rounded-full" />
                    <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
                        <MessageSquare className="h-12 w-12 text-primary mx-auto" />
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase">
                            NEVER MISS AN <span className="text-tertiary">UPDATE</span>.
                        </h2>
                        <p className="text-lg text-white/60 font-medium">
                            Weekly insights, technical Deep Dives, and the latest Web3 news delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                placeholder="Your email address"
                                className="bg-white/5 border-white/10 rounded-2xl h-14 px-6 text-white text-base focus:border-tertiary/50 focus:ring-0 placeholder:text-white/20"
                            />
                            <Button className="rounded-2xl px-10 h-14 bg-linear-to-r from-primary to-tertiary hover:brightness-110 text-white font-black uppercase tracking-widest text-xs border-0 shadow-lg shadow-primary/20">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Blog;