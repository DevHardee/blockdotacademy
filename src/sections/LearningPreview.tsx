import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Code, BookOpen, Users, Trophy, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Interactive Coding",
    description: "Write, test, and deploy smart contracts directly in your browser",
    preview: "Live coding environment with instant feedback"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Structured Learning Path",
    description: "Follow curated learning paths designed by industry experts",
    preview: "Progressive skill building with clear milestones"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Projects",
    description: "Collaborate on real-world projects with fellow developers",
    preview: "Team-based learning with peer code reviews"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Gamified Learning",
    description: "Earn points, badges, and certificates as you progress",
    preview: "Achievement system that motivates continuous learning"
  }
]

const CodeWindow = () => {
  const codeLines = [
    { line: 1, text: "contract BlockdotAcademy {", indent: 0 },
    { line: 2, text: "    struct Student {", indent: 4 },
    { line: 3, text: "        address wallet;", indent: 8 },
    { line: 4, text: "        uint256 xp;", indent: 8 },
    { line: 5, text: "        bool isCertified;", indent: 8 },
    { line: 6, text: "    }", indent: 4 },
    { line: 7, text: "", indent: 0 },
    { line: 8, text: "    mapping(address => Student) public students;", indent: 4 },
    { line: 9, text: "", indent: 0 },
    { line: 10, text: "    function enroll() external {", indent: 4 },
    { line: 11, text: "        students[msg.sender].wallet = msg.sender;", indent: 8 },
    { line: 12, text: "        emit StudentEnrolled(msg.sender);", indent: 8 },
    { line: 13, text: "    }", indent: 4 },
    { line: 14, text: "}", indent: 0 },
  ]

  return (
    <div className="relative group">
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-30 rounded-xl blur-lg group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="relative rounded-xl overflow-hidden border border-border/40 bg-[#1e1e1e] shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-4 text-xs text-white/40 font-mono">SmartContract.sol</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex"
            >
              <span className="text-white/20 mr-4 select-none w-6 text-right">{line.line}</span>
              <span style={{ paddingLeft: `${line.indent * 4}px` }} className="text-blue-100">
                {line.text.replace('contract', '').replace('struct', '').replace('function', '').replace('emit', '').replace('mapping', '')
                  .split(' ').map((word, i) => {
                    const keywords = ['contract', 'struct', 'function', 'emit', 'mapping', 'return', 'public', 'external', 'bool', 'uint256', 'address'];
                    if (line.text.trim().startsWith('//')) return <span key={i} className="text-green-400">{word} </span>;
                    if (keywords.includes(word)) return <span key={i} className="text-purple-400">{word} </span>;
                    return <span key={i}>{word} </span>;
                  })}
                {/* Simple syntax highlighting replacement */}
                <span dangerouslySetInnerHTML={{
                  __html: line.text
                    .replace(/contract|struct|function|event|mapping/g, '<span class="text-purple-400">$&</span>')
                    .replace(/address|uint256|bool/g, '<span class="text-yellow-300">$&</span>')
                    .replace(/public|external/g, '<span class="text-blue-400">$&</span>')
                    .replace(/BlockdotAcademy|Student|msg\.sender/g, '<span class="text-green-300">$&</span>')
                }} />
              </span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-6 right-6 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium backdrop-blur-sm"
        >
          <CheckCircle2 className="w-4 h-4" />
          Compiled Successfully
        </motion.div>
      </div>
    </div>
  )
}

const LearningPreview = () => {
  return (
    <section id="preview" className="py-20 md:py-24 p-3 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-6 text-sm px-4 py-2 hover:bg-primary/20 transition-colors">
            <Play className="w-4 h-4 mr-2" />
            Experience Our Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            See Blockdot in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our interactive learning platform accelerates your Web3 development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mock IDE */}
          <CodeWindow />

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="border border-border/30 bg-background/50 hover:bg-background hover:border-primary/60 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{feature.description}</p>
                    <p className="text-sm text-primary font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature.preview}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningPreview
