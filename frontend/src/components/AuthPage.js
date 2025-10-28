import AnimatedBackground from "./AnimatedBackground";
import AuthForm from "./AuthForm";

export default function AuthPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <AnimatedBackground />
      <AuthForm />
    </div>
  );
}
