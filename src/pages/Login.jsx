import AuthLayout from "./_AuthLayout";
export default function Login() {
  return (
    <AuthLayout
     type="login"
      title="Welcome back"
      subtitle="Sign in to pick up where you left off."
      action="Sign in"
      extra="New to SkyMart? Create an account"
    />
  );
}
