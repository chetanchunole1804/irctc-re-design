import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Train, Eye, EyeOff, Shield } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Welcome back! Logged in successfully.");
    setTimeout(() => navigate("/"), 800);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    toast.success("Account created. Please verify via OTP.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Left side decorative */}
        <div className="hidden lg:flex relative overflow-hidden items-center justify-center p-12" style={{ background: "linear-gradient(135deg, #0B4F9F 0%, #1e3a8a 100%)" }}>
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-white max-w-md">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center mb-6">
              <Train className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="font-display text-4xl font-extrabold leading-tight mb-4">Welcome to RailGo</h2>
            <p className="text-blue-100 text-lg mb-8">India's redesigned rail booking experience. Faster, smarter, beautifully simple.</p>
            <div className="space-y-3 text-sm">
              {["Lightning fast booking across 13,000+ trains", "Smart waitlist predictions powered by AI", "Seamless refunds in under 24 hours"].map((t,i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-400 flex items-center justify-center text-orange-300 text-xs">✓</div>
                  <span className="text-blue-50">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="flex items-center justify-center p-6 sm:p-12 bg-slate-50">
          <Card className="w-full max-w-md p-8">
            <Tabs defaultValue="login">
              <TabsList className="grid grid-cols-2 w-full mb-6">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <h1 className="font-display text-2xl font-extrabold text-slate-900 mb-1">Sign in to RailGo</h1>
                <p className="text-sm text-slate-500 mb-6">Enter your credentials to access your account.</p>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="uid">User ID / Mobile Number</Label>
                    <Input id="uid" placeholder="Enter your User ID or mobile" className="mt-1.5" required />
                  </div>
                  <div>
                    <Label htmlFor="pw">Password</Label>
                    <div className="relative mt-1.5">
                      <Input id="pw" type={showPw ? "text" : "password"} placeholder="Enter password" required />
                      <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                        {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                      <input type="checkbox" className="rounded" /> Remember me
                    </label>
                    <a href="#" className="text-blue-700 hover:text-blue-900 font-medium">Forgot Password?</a>
                  </div>
                  <Button type="submit" className="w-full btn-primary-grad text-white border-0 h-11 font-semibold">Sign In</Button>
                </form>
                <div className="flex items-center gap-2 my-5">
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-xs text-slate-400">OR CONTINUE WITH</span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-11">Google</Button>
                  <Button variant="outline" className="h-11">DigiLocker</Button>
                </div>
              </TabsContent>

              <TabsContent value="register">
                <h1 className="font-display text-2xl font-extrabold text-slate-900 mb-1">Create an account</h1>
                <p className="text-sm text-slate-500 mb-6">Join millions of travellers using RailGo daily.</p>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="fn">First Name</Label>
                      <Input id="fn" className="mt-1.5" required />
                    </div>
                    <div>
                      <Label htmlFor="ln">Last Name</Label>
                      <Input id="ln" className="mt-1.5" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="em">Email</Label>
                    <Input id="em" type="email" className="mt-1.5" required />
                  </div>
                  <div>
                    <Label htmlFor="mb">Mobile Number</Label>
                    <Input id="mb" className="mt-1.5" required />
                  </div>
                  <div>
                    <Label htmlFor="npw">Password</Label>
                    <Input id="npw" type="password" className="mt-1.5" required />
                  </div>
                  <Button type="submit" className="w-full btn-accent-grad text-white border-0 h-11 font-semibold">Create Account</Button>
                  <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3" /> Your data is encrypted with bank-grade security
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
