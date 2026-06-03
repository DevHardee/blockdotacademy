"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Loader2, ArrowLeft, UserPlus, Mail, Lock, User } from "lucide-react"
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

      const newUser = {
        name: `${firstName} ${lastName}`,
        email,
        bio: "",
        avatar: "",
      }

      localStorage.setItem("registeredUser", JSON.stringify(newUser))
      toast.success("Account created successfully!")
      navigate("/login")
    } catch {
      setError("Failed to sign up. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:hidden p-4"
      >
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-10 h-5 group-hover:-translate-x-1 transition-transform" />
        </div>
      </motion.div>

      <div className="relative min-h-screen bg-[#030303] flex items-center md:items-start md:pt-20 justify-center p-4 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[560px] relative z-10"
        >
          {/* Main Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Subtle top light effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8"
              >
                <UserPlus className="w-8 h-8 text-accent" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl! md:text-4xl! font-black text-white mb-4 tracking-tight uppercase"
              >
                Join the <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent italic">Academy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/40 font-medium leading-relaxed"
              >
                Create your account and start your journey today.
              </motion.p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="group/input"
                >
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within/input:text-accent transition-colors" />
                    <Input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      required
                      className="pl-12 bg-white/5 border-white/5 h-14 rounded-2xl text-white placeholder:text-white/20 focus:border-accent/50 transition-all focus:ring-0"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="group/input"
                >
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within/input:text-accent transition-colors" />
                    <Input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      required
                      className="pl-12 bg-white/5 border-white/5 h-14 rounded-2xl text-white placeholder:text-white/20 focus:border-accent/50 transition-all focus:ring-0"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="group/input"
              >
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within/input:text-accent transition-colors" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    className="pl-12 bg-white/5 border-white/5 h-14 rounded-2xl text-white placeholder:text-white/20 focus:border-accent/50 transition-all focus:ring-0"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="group/input"
              >
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within/input:text-accent transition-colors" />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="pl-12 bg-white/5 border-white/5 h-14 rounded-2xl text-white placeholder:text-white/20 focus:border-accent/50 transition-all focus:ring-0"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-2xl bg-linear-to-r from-primary to-accent hover:brightness-110 hover:scale-[1.02] transition-all duration-300 font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:scale-100"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </motion.div>
            </form>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-sm text-red-500 mt-6 text-center font-bold uppercase tracking-tight"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 pt-8 border-t border-white/5 text-center"
            >
              <p className="text-white/30 text-sm font-medium mb-4">
                Already have an account?
              </p>
              <div
                onClick={() => navigate("/login")}
                className="text-accent hover:text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm transition-colors inline-block pb-1 border-b border-primary hover:border-white"
              >
                Log in instead
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default SignUp