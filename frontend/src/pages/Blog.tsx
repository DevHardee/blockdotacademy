import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { Search, Plus } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "The Future of Algorithmic Trading",
        excerpt: "Exploring the convergence of high-frequency execution and predictive neural networks in the modern market landscape.",
        category: "FEATURED ANALYSIS",
        date: "8 min read",
        author: "Dr. Elias Thorne",
        authorRole: "Head of Quantitative Research",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
        isFeatured: true
    },
    {
        id: 2,
        title: "5 ML Models Every Trader Should Know",
        excerpt: "From Random Forests to LSTM networks, we break down the architectures providing the highest signal-to-noise ratio in volatile...",
        category: "MACHINE LEARNING",
        date: "5 min read",
        author: "Sarah Chen",
        authorRole: "Senior ML Engineer",
        image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Navigating the 2024 Quant Job Market",
        excerpt: "Industry leaders discuss the shifting requirements for quantitative researchers as AI integration becomes the standard.",
        category: "CAREER INSIGHT",
        date: "12 min read",
        author: "Marcus Vane",
        authorRole: "Talent Acquisition Lead",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Volatility as an Asset Class",
        excerpt: "Advanced strategies for hedging and profiting from extreme market variance during global macroeconomic shifts.",
        category: "TRADING MASTERY",
        date: "10 min read",
        author: "Dr. Elias Thorne",
        authorRole: "Head of Quantitative Research",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Blockdot Q3 Curriculum Expansion",
        excerpt: "Announcing our new specialized modules in DeFi Yield Optimization and Generative Agent-based Trading Models.",
        category: "ACADEMY UPDATES",
        date: "4 min read",
        author: "Academy Board",
        authorRole: "Education Department",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    }
];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All Insights");

    const categories = ["All Insights", "Trading Mastery", "Machine Learning", "Research"];

    return (
        <div className="min-h-screen bg-[#030303] text-white pt-10 md:pt-20 pb-32 relative overflow-hidden">
            {/* Background Glows */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-linear-to-r from-primary to-accent opacity-10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-linear-to-l from-primary to-accent opacity-10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* Header Section */}
            <MaxWidthWrapper className="relative z-10">
                <div className="mb-10 md:mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl! md:text-5xl! xl:text-7xl! font-black tracking-tighter leading-tight"
                    >
                        Tales from the<br />
                        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">BlockDot Academy</span>
                    </motion.h1>
                </div>

                {/* Featured Post */}
                {posts.filter(p => p.isFeatured).map(post => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group cursor-pointer mb-32"
                    >
                        <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/5 mb-8 shadow-2xl">
                            <img
                                src={post.image}
                                alt={post.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-[#030303]/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-5xl">
                                <div className="flex items-center gap-6 mb-8">
                                    <Badge className="bg-primary/20 text-primary border-primary/20 text-[10px] font-black tracking-widest uppercase py-2 px-5 rounded-xl backdrop-blur-md">
                                        {post.category}
                                    </Badge>
                                    <span className="text-[10px] font-black text-white/40 tracking-[0.2em] uppercase">{post.date}</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] group-hover:text-primary transition-colors tracking-tight">
                                    {post.title}
                                </h2>
                                <p className="text-xl text-white/40 font-medium leading-relaxed mb-10 max-w-3xl line-clamp-2 md:line-clamp-none">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/10 p-px shadow-xl">
                                        <div className="w-full h-full rounded-2xl bg-[#0a0a0a] flex items-center justify-center text-primary font-black text-lg">
                                            {post.author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-base font-black uppercase tracking-tight">{post.author}</div>
                                        <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em]">{post.authorRole}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Category Filters */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-20">
                    <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`h-14 px-10 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${activeCategory === cat
                                    ? "bg-primary! text-white! border-primary! shadow-[0_0_25px_rgba(41,98,255,0.4)]"
                                    : "bg-white/5! text-white/40! border-white/5! hover:bg-white/10! hover:text-white!"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:max-w-xs group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 text-white/20 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Explore insights..."
                            className="h-14 bg-white/5 border-white/5 rounded-2xl pl-14 text-white placeholder:text-white/20 focus:border-primary/50 transition-all backdrop-blur-sm"
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mb-40">
                    {posts.filter(p => !p.isFeatured).map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/5 mb-8 shadow-xl relative group">
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-6 px-2">
                                <div className="flex items-center gap-4">
                                    <Badge variant="outline" className="text-[9px] font-black tracking-[0.2em] uppercase border-white/10 text-white/40 rounded-lg px-4 py-1.5">
                                        {post.category}
                                    </Badge>
                                </div>
                                <h3 className="text-3xl font-black leading-tight group-hover:text-primary transition-colors tracking-tight">
                                    {post.title}
                                </h3>
                                <p className="text-lg text-white/40 font-medium leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-[10px] group-hover:translate-x-2 transition-transform duration-300">
                                    Read Analysis <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[4rem] p-12 md:p-24 overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl group"
                >
                    {/* Background elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] -mr-60 -mt-60 rounded-full group-hover:bg-primary/20 transition-colors duration-1000" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] -ml-40 -mb-40 rounded-full" />

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                            STAY AHEAD OF<br />
                            THE <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">ALGORITHM.</span>
                        </h2>
                        <p className="text-xl text-white/40 font-medium leading-relaxed mb-12">
                            Get weekly deep-dives into proprietary research, market anomalies, and academy updates delivered to your inbox.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Input
                                placeholder="professor@blockdot.com"
                                className="h-16 bg-[#0a0a0a] border-white/10 rounded-2xl px-8 text-white placeholder:text-white/20 focus:border-primary/50 text-lg transition-all"
                            />
                            <Button className="h-16 px-12 rounded-2xl bg-linear-to-r from-primary to-accent hover:brightness-110 text-white font-black uppercase tracking-widest text-sm transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Blog;
