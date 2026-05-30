"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface User {
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  isAdmin?: boolean; 
}

interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: User | null;
  login: (userData?: Partial<User>) => void;
  logout: () => void;
  updateUser: (updatedData: Partial<User>) => void;
  toggleAdmin: (value?: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    const storedUser = localStorage.getItem("user");
    const storedIsAdmin = localStorage.getItem("isAdmin");

    if (storedAuth === "true") setIsAuthenticated(true);
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedIsAdmin === "true") setIsAdmin(true);
  }, []);

  // keep login signature same for your app (you can optionally pass userData)
  const login = (userData?: Partial<User>) => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");

    if (userData) {
      const merged: User = { ...(user ?? {}), ...userData } as User;
      setUser(merged);
      localStorage.setItem("user", JSON.stringify(merged));
    }

    // if userData contains isAdmin true, enable admin
    if (userData?.isAdmin) {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
    }

    // navigate to dashboard
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const updateUser = (updatedData: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.success("Profile updated!");
  };

  const toggleAdmin = (value?: boolean) => {
    const next = typeof value === "boolean" ? value : !isAdmin;
    setIsAdmin(next);
    localStorage.setItem("isAdmin", next ? "true" : "false");
    toast.success(`Switched to ${next ? "Admin" : "User"} mode`);
    // optionally navigate to admin dashboard when switching on
    if (next) navigate("/admin/dashboard", { replace: true });
    else navigate("/dashboard", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isAdmin, user, login, logout, updateUser, toggleAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
