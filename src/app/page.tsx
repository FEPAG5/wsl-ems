import Image from "next/image";
import StarOfLife from "@/assets/svg/StarOfLife.svg";
import { LoginForm } from "@/components/login-form"

export default function Home() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Image src={StarOfLife} alt="Star of Life" className="size-4" />
          </div>
          EMS DATABASE
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
