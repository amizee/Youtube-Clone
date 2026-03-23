import { signInWithGoogle, signOut } from "../firebase/firebase";
import { User } from "firebase/auth";
import { Button } from "@/components/ui/button";


interface SignInProps {
  user: User | null
}

export default function SignIn ({ user }: SignInProps) {
  return (
    <div>
      { user ? (
          <Button variant="outline" size="lg" onClick={signOut}>
            Sign Out
          </Button>
        ) : (
          <Button size="lg" onClick={signInWithGoogle}>
            Sign In
          </Button>
        )
      }
    </div>
  )
}