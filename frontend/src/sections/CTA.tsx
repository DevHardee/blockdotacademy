import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

const CTA = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  const handleAction = () => {
    if (!isAuthenticated) {
      navigate("/signup")
      return
    }
    navigate("/my-courses")
  }

  return (
    <section id="contact" className="py-24 px-4 bg-[#030303] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Card className="p-16 rounded-[4rem] bg-linear-to-b from-[#0a0a0a] to-[#030303] border border-white/5 relative overflow-hidden group">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
            Ready to elevate your<br />trajectory?
          </h2>

          <p className="text-lg md:text-xl text-white/40 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
            Join a global community of builders and analysts. Start your first lesson for free today.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button
              size="lg"
              onClick={handleAction}
              className="bg-linear-to-r from-primary to-accent hover:brightness-110 transition-all font-bold px-12 py-8 rounded-[2rem] text-xl shadow-[0_0_30px_rgba(99,102,241,0.4)] group w-full sm:w-auto"
            >
              Join now
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default CTA
