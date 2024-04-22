import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";

export function ButtonWithIcon() {
  return (
    <>
      <GoogleOAuthProvider clientId="553721851960-qjhp5u43eek6lcr8ffnsh4ri777kckii.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
           toast.success("login succesfully")
          }}
          onError={() => {
          toast.error("Login Failed ")
          }}

        />
      </GoogleOAuthProvider>
    </>
  );
}
