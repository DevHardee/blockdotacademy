import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { courses } from "@/lib/courses"
import { CourseCard } from "@/components/course/CourseCard"
import { motion } from "motion/react"

const AllCourses = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeCategory, setActiveCategory] = useState("All Tracks")

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    const categories = ["All Tracks", "Blockchain", "Development", "DeFi", "NFTs", "Security"]

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const matchesSearch =
                course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = activeCategory === "All Tracks" || course.category === activeCategory
            return matchesSearch && matchesCategory && course.status === "Published"
        })
    }, [searchQuery, activeCategory])

    return (
        <div className="min-h-screen bg-[#030303] text-white pt-20 pb-32 relative overflow-hidden">
            {/* Background Glows matching Home.tsx */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-linear-to-r from-primary to-accent opacity-10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-linear-to-l from-primary to-accent opacity-10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <MaxWidthWrapper className="relative z-10">
                {/* Header Section */}
                <div className="mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl! md:text-5xl! xl:text-7xl! font-black tracking-tighter leading-tight"
                    >
                        Master the<br />
                        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Curriculum</span>
                    </motion.h1>
                </div>

                {/* Filters Section */}
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-24">
                    <div className="flex items-center gap-3 overflow-x-auto w-full lg:w-auto no-scrollbar pb-4 lg:pb-0">
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

                    <div className="relative w-full lg:max-w-md group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Find what interests you..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-16 bg-white/5! border-white/5! rounded-2xl pl-16 text-white placeholder:text-white/20 focus:border-primary/50 text-lg transition-all backdrop-blur-sm"
                        />
                    </div>
                </div>

                {/* Course Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredCourses.map((course, i) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                            >
                                <CourseCard course={course} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-40 bg-white/5 border border-white/5 rounded-[4rem] backdrop-blur-sm"
                    >
                        <Filter className="h-20 w-20 mx-auto text-white/10 mb-8" />
                        <h3 className="text-3xl font-black mb-4">No matching tracks</h3>
                        <p className="text-xl text-white/30 font-medium max-w-sm mx-auto">
                            Adjust your filters or try a different search term to find what you're looking for.
                        </p>
                    </motion.div>
                )}
            </MaxWidthWrapper>
        </div>
    )
}

export default AllCourses;