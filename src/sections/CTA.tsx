import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const CTA = () => {
  return (
    <section id="contact" className="py-14 md:py-28 h-[420px] md:h-full mb-20 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent text-center relative">

       <div className="absolute mx-auto w-full inset-0 bg-linear-to-r from-primary to-accent opacity-10" />

        <div className="relative z-10 px-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Transform Your Career?
          </h2>

          <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto">
            Join thousands of developers building the decentralized future.
          </p>

          <div className="flex items-center justify-center">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-primary-foreground! text-black! hover:bg-primary-foreground/95! shadow-lg text-base! md:text-lg! px-2! md:px-8! py-6"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CTA
