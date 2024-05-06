// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ButtonWithIcon() {

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => toast.success("Login Succesfully done"),
  });

  return (
    <>
      <Link to='/ResizeableDemo'>
      <Button  onClick={() => login()}>Login</Button>
      </Link>


    </>
  );
}
