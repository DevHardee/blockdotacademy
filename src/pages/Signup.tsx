"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Loader2 } from "lucide-react"
import { toast } from "sonner" 

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await new Promise((res) => setTimeout(res, 1200)) 
      toast.success("Account created successfully!")
      navigate("/dashboard")
    } catch {
      setError("Failed to sign up. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen pt-1 md:pt-5 pb-16">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-3xl! md:text-4xl! lg:text-5xl! font-semibold text-foreground">
            Create your account
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-xl mt-2">
            Join our community and start learning today.
          </p>
        </div>

        {/* Sign Up Form */}
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-sm md:max-w-md flex flex-col gap-4 mt-0 md:mt-6"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full font-medium"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing up...
              </>
            ) : (
              "Sign up"
            )}
          </Button>
        </form>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-destructive mt-4 text-center">{error}</p>
        )}

        {/* Footer Links */}
        <div className="flex items-center text-nowrap gap-2 text-sm mt-6 text-muted-foreground">
          <p>Already have an account?</p>
          <Button
            onClick={() => navigate("/login")}
            className="text-primary bg-background! hover:underline font-medium transition-colors"
          >
            Log in
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default SignUp
