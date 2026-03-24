import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Plus,
    Trash2,
    FileText,
    Video,
    FileBox,
    Link as LinkIcon,
    ChevronDown,
    ChevronUp,
    Image as ImageIcon,
    Save,
    Eye,
    Settings as SettingsIcon,
    Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export type Lesson = {
    id: string | number;
    type: "text" | "video" | "document" | "link";
    title: string;
    content?: string;
    file?: File | null;
    duration?: string;
};

export type Section = {
    id: string | number;
    title: string;
    lessons: Lesson[];
};

export type CourseData = {
    title: string;
    description: string;
    category: string;
    level: string;
    price: string;
    image?: string | File | null;
    sections: Section[];
};

interface CourseBuilderProps {
    initialData?: CourseData;
    onSave: (data: CourseData) => void;
    title: string;
}

export const CourseBuilder = ({ initialData, onSave, title }: CourseBuilderProps) => {
    const [course, setCourse] = useState<CourseData>(
        initialData || {
            title: "",
            description: "",
            category: "",
            level: "Beginner",
            price: "Free",
            sections: [],
        }
    );

    const [activeTab, setActiveTab] = useState("basic");
    const [expandedSections, setExpandedSections] = useState<Record<string | number, boolean>>({});

    const toggleSection = (id: string | number) => {
        setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const addSection = () => {
        const newSection: Section = {
            id: Date.now(),
            title: "New Section",
            lessons: [],
        };
        setCourse((prev) => ({
            ...prev,
            sections: [...prev.sections, newSection],
        }));
        toggleSection(newSection.id);
    };

    const removeSection = (id: string | number) => {
        setCourse((prev) => ({
            ...prev,
            sections: prev.sections.filter((s) => s.id !== id),
        }));
    };

    const updateSection = (id: string | number, title: string) => {
        setCourse((prev) => ({
            ...prev,
            sections: prev.sections.map((s) => (s.id === id ? { ...s, title } : s)),
        }));
    };

    const addLesson = (sectionId: string | number, type: Lesson["type"]) => {
        const newLesson: Lesson = {
            id: Date.now(),
            type,
            title: `New ${type} Lesson`,
            content: "",
        };
        setCourse((prev) => ({
            ...prev,
            sections: prev.sections.map((s) =>
                s.id === sectionId ? { ...s, lessons: [...s.lessons, newLesson] } : s
            ),
        }));
    };

    const removeLesson = (sectionId: string | number, lessonId: string | number) => {
        setCourse((prev) => ({
            ...prev,
            sections: prev.sections.map((s) =>
                s.id === sectionId
                    ? { ...s, lessons: s.lessons.filter((l) => l.id !== lessonId) }
                    : s
            ),
        }));
    };

    const updateLesson = (
        sectionId: string | number,
        lessonId: string | number,
        data: Partial<Lesson>
    ) => {
        setCourse((prev) => ({
            ...prev,
            sections: prev.sections.map((s) =>
                s.id === sectionId
                    ? {
                        ...s,
                        lessons: s.lessons.map((l) =>
                            l.id === lessonId ? { ...l, ...data } : l
                        ),
                    }
                    : s
            ),
        }));
    };

    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="text-sm text-muted-foreground">Craft a high-quality learning experience</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="hidden sm:flex">
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                    </Button>
                    <Button onClick={() => onSave(course)} className="bg-primary hover:bg-primary/90">
                        <Save className="h-4 w-4 mr-2" />
                        Save Course
                    </Button>
                </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 h-12 bg-muted/30 p-1">
                    <TabsTrigger value="basic" className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm">
                        <SettingsIcon className="h-4 w-4 mr-2" />
                        Basic Details
                    </TabsTrigger>
                    <TabsTrigger value="curriculum" className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm">
                        <Layers className="h-4 w-4 mr-2" />
                        Curriculum
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm">
                        <SettingsIcon className="h-4 w-4 mr-2" />
                        Advanced
                    </TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <TabsContent value="basic" className="space-y-6 mt-0">
                            <Card className="border border-border/40 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm">
                                <CardContent className="p-8 space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/80">Course Title</label>
                                        <Input
                                            placeholder="e.g. Mastering Blockchain Smart Contracts"
                                            value={course.title}
                                            className="h-12 text-lg focus-visible:ring-primary/30"
                                            onChange={(e) => setCourse({ ...course, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-foreground/80">Category</label>
                                            <Input
                                                placeholder="e.g. Development"
                                                value={course.category}
                                                onChange={(e) => setCourse({ ...course, category: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-foreground/80">Level</label>
                                            <select
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                value={course.level}
                                                onChange={(e) => setCourse({ ...course, level: e.target.value })}
                                            >
                                                <option>Beginner</option>
                                                <option>Intermediate</option>
                                                <option>Advanced</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-foreground/80">Price</label>
                                            <Input
                                                placeholder="e.g. Free or $49.99"
                                                value={course.price}
                                                onChange={(e) => setCourse({ ...course, price: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/80">Course Summary</label>
                                        <Textarea
                                            placeholder="What will students learn in this course?"
                                            rows={5}
                                            className="resize-none focus-visible:ring-primary/30"
                                            value={course.description}
                                            onChange={(e) => setCourse({ ...course, description: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/80">Header Image</label>
                                        <div className="group relative border-2 border-dashed border-border/60 rounded-xl p-8 flex flex-col items-center justify-center bg-muted/10 hover:bg-muted/20 hover:border-primary/40 transition-all cursor-pointer">
                                            <ImageIcon className="h-10 w-10 text-muted-foreground mb-3 group-hover:text-primary transition-colors" />
                                            <p className="text-sm font-medium">Click to upload or drag and drop</p>
                                            <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="curriculum" className="space-y-6 mt-0">
                            <div className="space-y-4">
                                {course.sections.map((section, sIdx) => (
                                    <Card key={section.id} className="border border-border/40 shadow-sm overflow-hidden bg-card/50">
                                        <div className="p-4 flex items-center justify-between border-b border-border/40 bg-muted/20">
                                            <div className="flex items-center gap-3 flex-1">
                                                <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center bg-background shrink-0">
                                                    {sIdx + 1}
                                                </Badge>
                                                <Input
                                                    value={section.title}
                                                    onChange={(e) => updateSection(section.id, e.target.value)}
                                                    className="bg-transparent border-none shadow-none focus-visible:ring-0 font-semibold text-lg p-0 h-auto"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 hover:bg-red-500/10 hover:text-red-500"
                                                    onClick={() => removeSection(section.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => toggleSection(section.id)}
                                                >
                                                    {expandedSections[section.id] ? (
                                                        <ChevronUp className="h-4 w-4" />
                                                    ) : (
                                                        <ChevronDown className="h-4 w-4" />
                                                    )}
                                                </Button>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {expandedSections[section.id] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <CardContent className="p-6 space-y-4">
                                                        <div className="space-y-3">
                                                            {section.lessons.map((lesson) => (
                                                                <div
                                                                    key={lesson.id}
                                                                    className="group flex flex-col p-4 border border-border/40 rounded-xl bg-background hover:border-primary/30 transition-all"
                                                                >
                                                                    <div className="flex items-center gap-4">
                                                                        <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 transition-colors">
                                                                            {lesson.type === "text" && <FileText className="h-5 w-5" />}
                                                                            {lesson.type === "video" && <Video className="h-5 w-5" />}
                                                                            {lesson.type === "document" && <FileBox className="h-5 w-5" />}
                                                                            {lesson.type === "link" && <LinkIcon className="h-5 w-5" />}
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <Input
                                                                                value={lesson.title}
                                                                                onChange={(e) =>
                                                                                    updateLesson(section.id, lesson.id, { title: e.target.value })
                                                                                }
                                                                                className="bg-transparent border-none shadow-none focus-visible:ring-0 font-medium p-0 h-auto mb-1"
                                                                            />
                                                                            <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider">
                                                                                <span>{lesson.type}</span>
                                                                                <span>•</span>
                                                                                <button className="hover:text-primary transition-colors">Edit Content</button>
                                                                            </div>
                                                                        </div>
                                                                        <Button
                                                                            variant="ghost"
                                                                            size="icon"
                                                                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/10 hover:text-red-500"
                                                                            onClick={() => removeLesson(section.id, lesson.id)}
                                                                        >
                                                                            <Trash2 className="h-4 w-4" />
                                                                        </Button>
                                                                    </div>

                                                                    {/* Detailed Content based on type */}
                                                                    <div className="mt-4 pt-4 border-t border-border/20 space-y-3">
                                                                        {lesson.type === "text" && (
                                                                            <Textarea
                                                                                placeholder="Lesson content (Markdown supported)"
                                                                                value={lesson.content}
                                                                                className="text-sm bg-muted/5 border-none resize-none focus-visible:ring-primary/20"
                                                                                rows={3}
                                                                                onChange={(e) =>
                                                                                    updateLesson(section.id, lesson.id, { content: e.target.value })
                                                                                }
                                                                            />
                                                                        )}
                                                                        {lesson.type === "video" && (
                                                                            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 border border-border/40">
                                                                                <Video className="h-4 w-4 text-muted-foreground" />
                                                                                <Input
                                                                                    placeholder="Video URL or upload file"
                                                                                    className="flex-1 h-8 text-xs border-none shadow-none bg-transparent p-0"
                                                                                    value={lesson.content}
                                                                                    onChange={(e) =>
                                                                                        updateLesson(section.id, lesson.id, { content: e.target.value })
                                                                                    }
                                                                                />
                                                                                <Button size="sm" variant="outline" className="h-7 text-[10px]">Upload</Button>
                                                                            </div>
                                                                        )}
                                                                        {lesson.type === "link" && (
                                                                            <Input
                                                                                placeholder="https://..."
                                                                                value={lesson.content}
                                                                                className="text-sm bg-muted/5 border-none focus-visible:ring-primary/20"
                                                                                onChange={(e) =>
                                                                                    updateLesson(section.id, lesson.id, { content: e.target.value })
                                                                                }
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        <div className="flex flex-wrap gap-2 pt-4">
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="rounded-full bg-background border-border/60 hover:border-primary/40"
                                                                onClick={() => addLesson(section.id, "text")}
                                                            >
                                                                <Plus className="h-3.5 w-3.5 mr-1.5" />
                                                                Add Video
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="rounded-full bg-background border-border/60 hover:border-primary/40"
                                                                onClick={() => addLesson(section.id, "text")}
                                                            >
                                                                <Plus className="h-3.5 w-3.5 mr-1.5" />
                                                                Add Quiz
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="rounded-full bg-background border-border/60 hover:border-primary/40"
                                                                onClick={() => addLesson(section.id, "text")}
                                                            >
                                                                <Plus className="h-3.5 w-3.5 mr-1.5" />
                                                                Add Text
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="rounded-full bg-background border-border/60 hover:border-primary/40"
                                                                onClick={() => addLesson(section.id, "link")}
                                                            >
                                                                <Plus className="h-3.5 w-3.5 mr-1.5" />
                                                                Add Resources
                                                            </Button>
                                                        </div>
                                                    </CardContent>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Card>
                                ))}

                                <Button
                                    variant="outline"
                                    className="w-full h-14 border-dashed border-2 hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all rounded-xl"
                                    onClick={addSection}
                                >
                                    <Plus className="h-5 w-5 mr-2" />
                                    Add New Section
                                </Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="settings" className="space-y-6 mt-0">
                            <Card className="border border-border/40 shadow-sm overflow-hidden bg-card/50">
                                <CardContent className="p-8 space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <h4 className="font-semibold">Publishing Status</h4>
                                            <p className="text-sm text-muted-foreground">Control who can see this course</p>
                                        </div>
                                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-3 py-1">
                                            Draft
                                        </Badge>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-semibold">Instructor Materials</h4>
                                        <div className="p-4 rounded-xl border border-dashed border-border bg-muted/5 text-center">
                                            <p className="text-sm text-muted-foreground mb-3">Add teacher-only guides or private notes</p>
                                            <Button variant="outline" size="sm">Add Materials</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </motion.div>
                </AnimatePresence>
            </Tabs>
        </div>
    );
};
