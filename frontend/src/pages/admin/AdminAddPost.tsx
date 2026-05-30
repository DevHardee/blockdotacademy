import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Save, Image as ImageIcon } from "lucide-react";

const AdminAddPost = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Blog post created successfully!");
        navigate("/admin/blog");
    };

    return (
        <MaxWidthWrapper className="pb-20">
            <div className="flex items-center gap-4 mb-8">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate("/admin/blog")}
                    className="rounded-full bg-white/5 hover:bg-white/10"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-4xl font-black uppercase tracking-tight">Create New Post</h1>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-6">
                    <Card className="bg-[#0a0a0a] border-white/5 rounded-[2rem] overflow-hidden p-8">
                        <CardContent className="p-0 space-y-6">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Post Title</Label>
                                <Input
                                    placeholder="e.g. The Future of Zero Knowledge"
                                    className="bg-white/5 border-white/5 h-14 rounded-xl text-lg focus:border-primary/50 focus:ring-0"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Excerpt</Label>
                                <Textarea
                                    placeholder="Short summary of the post..."
                                    className="bg-white/5 border-white/5 min-h-[100px] rounded-xl focus:border-primary/50 focus:ring-0"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Post Content (Markdown)</Label>
                                <Textarea
                                    placeholder="Write your story here..."
                                    className="bg-white/5 border-white/5 min-h-[400px] rounded-xl focus:border-primary/50 focus:ring-0"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <Card className="bg-[#0a0a0a] border-white/5 rounded-[2rem] overflow-hidden p-8">
                        <CardContent className="p-0 space-y-6">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Category</Label>
                                <select className="w-full bg-white/5 border-white/5 h-12 rounded-xl px-4 text-sm focus:border-primary/50 focus:ring-0 outline-none">
                                    <option value="Research">Research</option>
                                    <option value="Security">Security</option>
                                    <option value="Development">Development</option>
                                    <option value="Market">Market</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Author</Label>
                                <Input
                                    placeholder="Author name"
                                    className="bg-white/5 border-white/5 h-12 rounded-xl focus:border-primary/50 focus:ring-0"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Cover Image URL</Label>
                                <div className="relative">
                                    <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                                    <Input
                                        placeholder="https://..."
                                        className="bg-white/5 border-white/5 h-12 pl-12 rounded-xl focus:border-primary/50 focus:ring-0"
                                    />
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button type="submit" className="w-full rounded-xl h-14 bg-linear-to-r from-primary to-accent hover:brightness-110 text-white font-black uppercase tracking-widest text-xs border-0 shadow-lg shadow-primary/20">
                                    <Save className="mr-2 h-4 w-4" /> Publish Post
                                </Button>
                                <Button type="button" variant="ghost" className="w-full mt-2 rounded-xl h-12 text-white/40 hover:text-white uppercase tracking-widest text-[10px] font-bold">
                                    Save as Draft
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </form>
        </MaxWidthWrapper>
    );
};

export default AdminAddPost;
