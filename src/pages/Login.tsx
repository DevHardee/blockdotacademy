"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Loader2 } from "lucide-react"
import {toast} from "sonner"
import { useAuth } from "@/context/AuthContext"

const Login: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()
  const {login} = useAuth()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      // Simulate async login
      await new Promise((res) => setTimeout(res, 1200))
      login()
      toast.success("Logged in successfully!")
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center min-h-[80vh] pt-5 pb-16">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl! md:text-4xl! lg:text-5xl! font-semibold text-foreground">
            Log in to your account
          </h1>
          <p className="text-muted-foreground text-sm md:text-base lg:text-xl mt-2">
            Welcome back! Enter your credentials below to continue.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm md:max-w-md flex flex-col gap-4"
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full font-medium"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
              </>
            ) : (
              "Log in"
            )}
          </Button>
        </form>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-destructive mt-4 text-center">{error}</p>
        )}

        <div className="flex items-center text-nowrap gap-2 text-sm mt-6 text-muted-foreground">
          <p>Don’t have an account?</p>
          <Button
            onClick={() => navigate("/signup")}
            className="text-primary bg-background! hover:underline font-medium transition-colors"
          >
            Sign up
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default Login
