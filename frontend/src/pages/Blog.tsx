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
        image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Navigating the 2024 Quant Job Market",
        excerpt: "Industry leaders discuss the shifting requirements for quantitative researchers as AI integration becomes the standard.",
        category: "CAREER INSIGHT",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Volatility as an Asset Class",
        excerpt: "Advanced strategies for hedging and profiting from extreme market variance during global macroeconomic shifts.",
        category: "TRADING MASTERY",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Blockdot Q3 Curriculum Expansion",
        excerpt: "Announcing our new specialized modules in DeFi Yield Optimization and Generative Agent-based Trading Models.",
        category: "ACADEMY UPDATES",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    }
];

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All Insights");

    const categories = ["All Insights", "Trading Mastery", "Machine Learning", "Research"];

    return (
        <div className="min-h-screen bg-[#030303] text-white pt-20 pb-32">
            {/* Header Section */}
            <MaxWidthWrapper>
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-white/40 mb-10"
                    >
                        <div className="w-6 h-1 bg-primary/60 rounded-full" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">The Digital Observatory</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight"
                    >
                        Academy<br />
                        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Insights</span>
                    </motion.h1>
                </div>

                {/* Featured Post */}
                {posts.filter(p => p.isFeatured).map(post => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group cursor-pointer mb-20"
                    >
                        <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/5 mb-8">
                            <img
                                src={post.image}
                                alt={post.title}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-4xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <Badge className="bg-[#6B46C1] hover:bg-[#6B46C1] text-white border-0 text-[10px] font-black tracking-widest uppercase py-1.5 px-4 rounded-lg">
                                        {post.category}
                                    </Badge>
                                    <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">{post.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-lg text-white/40 font-medium leading-relaxed mb-8 max-w-2xl line-clamp-2 md:line-clamp-none">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 p-0.5">
                                        <div className="w-full h-full rounded-full bg-linear-to-br from-primary to-accent overflow-hidden">
                                            {/* Author placeholder */}
                                            <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-primary font-black">ET</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-black uppercase tracking-tight">{post.author}</div>
                                        <div className="text-[10px] text-white/40 font-medium uppercase tracking-widest">{post.authorRole}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Category Filters */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-16">
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`h-12 px-8 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === cat
                                    ? "bg-primary text-white shadow-[0_0_20px_rgba(41,98,255,0.4)]"
                                    : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:max-w-xs group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 text-white/20 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Explore insights..."
                            className="h-12 bg-white/5 border-white/5 rounded-full pl-12 text-white placeholder:text-white/20 focus:border-primary/50"
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 mb-32">
                    {posts.filter(p => !p.isFeatured).map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/5 mb-8">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-[10px] font-black tracking-widest border-white/10 text-white/40 rounded-md px-3 py-1">
                                    {post.category}
                                </Badge>
                                <h3 className="text-2xl md:text-3xl font-black leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-base text-white/40 font-medium leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] group-hover:translate-x-1 transition-transform">
                                    Read Analysis <Plus className="w-3 h-3" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] p-10 md:p-20 overflow-hidden bg-white/5 border border-white/10"
                >
                    {/* Background elements */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] -mr-40 -mt-40 rounded-full" />

                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                            Stay ahead of<br />
                            the <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Algorithm.</span>
                        </h2>
                        <p className="text-lg text-white/40 font-medium leading-relaxed mb-10">
                            Get weekly deep-dives into proprietary research, market anomalies, and academy updates delivered to your inbox.
                        </p>

                        <div className="space-y-4">
                            <Input
                                placeholder="professor@diplomat.edu"
                                className="h-16 bg-[#0a0a0a] border-white/5 rounded-2xl px-6 text-white placeholder:text-white/20 focus:border-primary/50"
                            />
                            <Button className="w-full h-16 rounded-2xl bg-linear-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent text-white font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/20">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </MaxWidthWrapper>

            {/* Simple Mobile Nav for Visuals (matches image bottom) */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-16 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl z-50 flex items-center justify-around px-4">
                <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
                    <Search className="w-5 h-5" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Explorer</span>
                </div>
                <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
                    <div className="w-5 h-5 rounded-sm border-2 border-current" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Learning</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-primary">
                    <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center">
                        <div className="w-1.5 h-3 bg-primary rounded-[2px]" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest">Insights</span>
                </div>
                <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity">
                    <div className="w-5 h-5 rounded-full border-2 border-current" />
                    <span className="text-[8px] font-black uppercase tracking-widest">Account</span>
                </div>
            </div>
        </div>
    );
};

export default Blog;
