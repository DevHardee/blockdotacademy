import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ChevronRight,
    ArrowRight,
    TrendingUp,
    Shield
} from "lucide-react";
import { motion } from "motion/react";

const jobRoles = [
    {
        id: 1,
        title: "Lead ML Strategy Quantitative Trader",
        company: "Paradigm Shift Research",
        location: "Remote",
        type: "Full Time",
        tags: ["PYTORCH", "SOLVER", "MEV"],
        salary: "$250K - $400K",
        badge: "HOT ROLE",
        badgeColor: "bg-emerald-500/10 text-emerald-500",
        logo: "R",
        logoBg: "bg-blue-900/20",
        hasAlumni: true,
        action: "Apply Now"
    },
    {
        id: 2,
        title: "Smart Contract Auditor",
        company: "Ethereum Foundation",
        location: "Switzerland (Hybrid)",
        type: "Freelance",
        tags: ["SOLIDITY", "SECURITY"],
        badge: "FREELANCE",
        badgeColor: "bg-purple-500/10 text-purple-500",
        logo: "E",
        logoBg: "bg-slate-800",
        action: "View Project"
    },
    {
        id: 3,
        title: "Ecosystem Growth Lead",
        company: "Solana Labs",
        location: "Global",
        type: "Full Time",
        tags: ["MARKETING", "WEB3"],
        badge: "REMOTE",
        badgeColor: "bg-blue-500/10 text-blue-500",
        logo: "S",
        logoBg: "bg-blue-900/40",
        action: "View Role"
    },
    {
        id: 4,
        title: "Senior GPU Engineer",
        company: "NVIDIA",
        location: "Austin, TX",
        type: "Full Time",
        tags: ["CUDA", "C++"],
        badge: "FULL TIME",
        badgeColor: "bg-orange-500/10 text-orange-500",
        logo: "N",
        logoBg: "bg-emerald-900/20",
        action: "View Role"
    }
];

const JobsBoard = () => {
    const [activeFilter, setActiveFilter] = useState("All Roles");

    return (
        <div className="min-h-screen bg-[#030303] text-white overflow-hidden relative">
            {/* Background Glow */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-linear-to-r from-primary to-accent opacity-10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-linear-to-l from-primary to-accent opacity-10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <MaxWidthWrapper className="space-y-12 relative z-10 py-0 md:py-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 pt-10"
                >
                    <div className="space-y-4">
                        <h1 className="text-4xl! md:text-5xl! xl:text-7xl! font-black tracking-tight capitalize leading-[0.95] max-w-4xl">
                            Shape your career <br />
                            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">at the edge of innovation</span>
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <p className="text-base md:text-xl text-white/40 font-medium leading-relaxed max-w-2xl">
                            Take the next step in your journey with exclusive roles at pioneering Web3 and AI startups. Join the teams building the future, before the rest of the world finds out.
                        </p>
                    </div>
                </motion.div>

                {/* Filters */}
                <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
                    {["All Roles", "Trading & Quant", "Smart Contracts", "Development", "Marketing"].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 h-12 rounded-2xl text-[11px] font-black! uppercase tracking-widest transition-all whitespace-nowrap ${activeFilter === filter
                                ? "bg-accent! text-white border-primary! shadow-[0_0_15px_rgba(41,98,255,0.4)]"
                                : "bg-[#111111]! text-white/40! hover:text-white! border border-white/5!"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Job Cards Grid */}``
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Listings */}
                    <div className="lg:col-span-8 space-y-8">
                        {jobRoles.map((job, i) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="bg-white/5! border-white/5! rounded-[2.5rem] p-8 hover:border-primary/30! transition-all duration-500 group relative overflow-hidden backdrop-blur-sm!">
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                        {/* Logo Column */}
                                        <div className={`w-16 h-16 rounded-2xl ${job.logoBg} flex items-center justify-center shrink-0 border border-white/5 shadow-inner`}>
                                            <span className="text-xl font-black text-white">{job.logo}</span>
                                        </div>

                                        {/* Content Column */}
                                        <div className="flex-1 space-y-6">
                                            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-3 flex-wrap">
                                                        <h3 className="text-2xl font-black leading-tight group-hover:text-primary transition-colors">
                                                            {job.title}
                                                        </h3>
                                                        <Badge className={`${job.badgeColor} border-0 rounded-full px-3 py-1 text-[8px] font-black uppercase tracking-widest`}>
                                                            {job.badge}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm font-medium text-white/40">
                                                        {job.company} • {job.location}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-2">
                                                {job.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-black text-white/40 tracking-wider">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {job.salary && (
                                                    <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-[10px] font-black text-emerald-500 tracking-wider border border-emerald-500/20">
                                                        {job.salary}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                                {job.hasAlumni && (
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex -space-x-2">
                                                            {[1, 2].map(idx => (
                                                                <div key={idx} className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-slate-800" />
                                                            ))}
                                                        </div>
                                                        <p className="text-[10px] font-bold text-white/30 leading-tight">
                                                            +12 Academy <br /> Alumni here
                                                        </p>
                                                    </div>
                                                )}

                                                <Button className={`ml-auto rounded-xl px-10 h-12 ${job.action === "Apply Now" ? "bg-linear-to-r from-primary to-accent text-white shadow-lg shadow-primary/20" : "bg-white/5 text-white/40 border border-white/10 hover:bg-white/10"} font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform`}>
                                                    {job.action}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}

                        {/* Pagination with motion */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center justify-center gap-2 pt-8"
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mr-4 hidden md:block">
                                SHOWING 1-12 OF 248 OPPORTUNITIES
                            </span>
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full border border-white/5 text-white/40 hover:text-white">
                                    <ChevronRight className="rotate-180 h-4 w-4" />
                                </Button>
                                <Button className="w-10 h-10 rounded-full bg-primary text-white font-black text-xs">
                                    1
                                </Button>
                                <Button variant="ghost" className="w-10 h-10 rounded-full border border-white/5 text-white/40 hover:text-white font-black text-xs">
                                    2
                                </Button>
                                <Button variant="ghost" className="w-10 h-10 rounded-full border border-white/5 text-white/40 hover:text-white font-black text-xs">
                                    3
                                </Button>
                                <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full border border-white/5 text-white/40 hover:text-white">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar / Promo Area */}
                    <div className="lg:col-span-4 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/5 border-white/5 rounded-[2.5rem] overflow-hidden group backdrop-blur-sm">
                                <CardContent className="p-10 space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black leading-tight">
                                            LEVEL UP <br /> YOUR <span className="text-primary italic">SKILLS?</span>
                                        </h3>
                                        <p className="text-base text-white/40 font-medium leading-relaxed">
                                            Most companies on Blockdot require a Certification level of V1.0 or higher. Finish your Tracing Lab modules to unlock these premium roles.
                                        </p>
                                    </div>

                                    <Button variant="link" className="p-0 h-auto text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all">
                                        Go to Courses <ArrowRight className="h-4 w-4" />
                                    </Button>

                                    <div className="aspect-square relative rounded-[2rem] overflow-hidden bg-slate-900/50 border border-white/5 flex items-center justify-center group-hover:bg-slate-900/30 transition-all">
                                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative z-10 flex flex-col items-center gap-4">
                                            <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center bg-primary/5 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                                                <Shield className="h-10 w-10 text-primary" />
                                            </div>
                                            <Badge className="bg-primary/20 text-primary border-primary/30 rounded-full px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em]">
                                                CYBERSECURITY
                                            </Badge>
                                        </div>
                                        <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-[spin_20s_linear_infinite] opacity-20" />
                                        <div className="absolute w-48 h-48 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-40 ml-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="bg-linear-to-br from-primary to-accent rounded-[2.5rem] p-10 border-0 text-white space-y-6 relative overflow-hidden group shadow-2xl shadow-primary/20">
                                <TrendingUp className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                                <div className="space-y-4 relative z-10">
                                    <h4 className="text-3xl font-black leading-tight uppercase tracking-tight">
                                        Talent <br /> Analytics
                                    </h4>
                                    <p className="text-sm font-medium text-white/80 leading-relaxed">
                                        Companies are currently looking for Solidity Developers and Quant Researchers.
                                    </p>
                                </div>
                                <Button className="w-full rounded-xl bg-white text-primary hover:bg-white/90 font-black uppercase tracking-widest text-[10px] border-0 relative z-10 h-14 shadow-sm group-hover:scale-[1.02] transition-transform">
                                    Learn More
                                </Button>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default JobsBoard;