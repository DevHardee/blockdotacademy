import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const CTA = () => {
  return (
    <section id="contact" className="py-28 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of developers building the decentralized future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/courses">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg text-lg px-10 py-6"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-primary/30"
            >
              Schedule Demo
            </Button>
          </div>
      </section>
  )
}

export default CTA
