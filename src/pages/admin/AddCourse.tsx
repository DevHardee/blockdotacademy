import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Lesson = {
  id: number;
  type: "text" | "video" | "document" | "link";
  title: string;
  content?: string;
  file?: File | null;
};

type Section = {
  id: number;
  title: string;
  lessons: Lesson[];
};

const AdminAddCourse = () => {
  const [headerImage, setHeaderImage] = useState<File | null>(null);

  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
  });

  const [sections, setSections] = useState<Section[]>([]);

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "",
        lessons: [],
      },
    ]);
  };

  const removeSection = (id: number) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
  };

  const updateSectionTitle = (id: number, value: string) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, title: value } : s
      )
    );
  };

  const addLesson = (sectionId: number, type: Lesson["type"]) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              lessons: [
                ...s.lessons,
                {
                  id: Date.now(),
                  type,
                  title: "",
                  content: "",
                  file: null,
                },
              ],
            }
          : s
      )
    );
  };

  const removeLesson = (sectionId: number, lessonId: number) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              lessons: s.lessons.filter((l) => l.id !== lessonId),
            }
          : s
      )
    );
  };

  const updateLesson = (
    sectionId: number,
    lessonId: number,
    field: string,
    value: any
  ) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              lessons: s.lessons.map((l) =>
                l.id === lessonId ? { ...l, [field]: value } : l
              ),
            }
          : s
      )
    );
  };

  const handleSave = () => {
    const fullCourse = {
      ...courseInfo,
      headerImage,
      sections,
    };

    console.log("FULL COURSE DATA:", fullCourse);

    alert("Course saved (console logged for now)");
  };

  return (
    <MaxWidthWrapper className="py-8">
      <h1 className="text-3xl font-bold mb-4">Create a New Course</h1>
      <p className="text-muted-foreground mb-8">
        Add course details, sections, lessons, videos, documents and structure your full curriculum.
      </p>

      {/* ================================
           COURSE HEADER / GENERAL INFO
         ================================ */}
      <Card className="p-6 bg-card-gradient border-border/30 mb-8 space-y-4">
        <h2 className="text-xl font-semibold">Course Details</h2>

        <div className="space-y-3">
          <input
            placeholder="Course Title"
            className="w-full p-2 rounded-xl border bg-background"
            value={courseInfo.title}
            onChange={(e) => setCourseInfo({ ...courseInfo, title: e.target.value })}
          />

          <textarea
            placeholder="Course Description"
            rows={4}
            className="w-full p-2 rounded-xl border bg-background"
            value={courseInfo.description}
            onChange={(e) => setCourseInfo({ ...courseInfo, description: e.target.value })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Category"
              className="p-2 rounded-xl border bg-background"
              value={courseInfo.category}
              onChange={(e) => setCourseInfo({ ...courseInfo, category: e.target.value })}
            />

            <input
              placeholder="Level (Beginner, Intermediate, Advanced)"
              className="p-2 rounded-xl border bg-background"
              value={courseInfo.level}
              onChange={(e) => setCourseInfo({ ...courseInfo, level: e.target.value })}
            />
          </div>

          {/* HEADER IMAGE UPLOAD */}
          <div>
            <label className="block font-medium mb-1">Course Header Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setHeaderImage(e.target.files?.[0] || null)}
              className="block"
            />
          </div>
        </div>
      </Card>

      {/* ================================
           SECTIONS + LESSON BUILDER
         ================================ */}
      <div className="space-y-6">
        {sections.map((section) => (
          <Card
            key={section.id}
            className="p-6 bg-card-gradient border-border/30 space-y-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Course Section</h2>

              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeSection(section.id)}
              >
                Remove Section
              </Button>
            </div>

            <input
              placeholder="Section Title (e.g. Introduction)"
              className="p-2 rounded-xl border bg-background w-full"
              value={section.title}
              onChange={(e) =>
                updateSectionTitle(section.id, e.target.value)
              }
            />

            {/* LESSONS */}
            <div className="space-y-4">
              {section.lessons.map((lesson) => (
                <Card
                  key={lesson.id}
                  className="p-4 border border-border/40 bg-background/40 rounded-xl"
                >
                  <div className="flex justify-between mb-3">
                    <strong className="capitalize">{lesson.type} Lesson</strong>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        removeLesson(section.id, lesson.id)
                      }
                    >
                      Remove
                    </Button>
                  </div>

                  <input
                    placeholder="Lesson Title"
                    className="p-2 rounded-xl border bg-background w-full mb-3"
                    value={lesson.title}
                    onChange={(e) =>
                      updateLesson(section.id, lesson.id, "title", e.target.value)
                    }
                  />

                  {/* Different input depending on lesson type */}
                  {lesson.type === "text" && (
                    <textarea
                      placeholder="Lesson Text Content"
                      rows={4}
                      className="p-2 rounded-xl border bg-background w-full"
                      value={lesson.content}
                      onChange={(e) =>
                        updateLesson(section.id, lesson.id, "content", e.target.value)
                      }
                    />
                  )}

                  {lesson.type === "video" && (
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) =>
                        updateLesson(section.id, lesson.id, "file", e.target.files?.[0] || null)
                      }
                    />
                  )}

                  {lesson.type === "document" && (
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        updateLesson(section.id, lesson.id, "file", e.target.files?.[0] || null)
                      }
                    />
                  )}

                  {lesson.type === "link" && (
                    <input
                      placeholder="External link"
                      className="p-2 rounded-xl border bg-background w-full"
                      value={lesson.content}
                      onChange={(e) =>
                        updateLesson(section.id, lesson.id, "content", e.target.value)
                      }
                    />
                  )}
                </Card>
              ))}
            </div>

            {/* ADD LESSON BUTTONS */}
            <div className="flex gap-3 mt-4">
              <Button size="sm" variant="outline" onClick={() => addLesson(section.id, "text")}>
                + Text Lesson
              </Button>
              <Button size="sm" variant="outline" onClick={() => addLesson(section.id, "video")}>
                + Video Lesson
              </Button>
              <Button size="sm" variant="outline" onClick={() => addLesson(section.id, "document")}>
                + Document
              </Button>
              <Button size="sm" variant="outline" onClick={() => addLesson(section.id, "link")}>
                + External Link
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* ADD A NEW SECTION */}
      <Button className="mt-6" onClick={addSection}>
        + Add Section
      </Button>

      {/* SAVE BUTTON */}
      <div className="mt-10 flex justify-end">
        <Button onClick={handleSave}>Save Course</Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default AdminAddCourse;
