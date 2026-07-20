import AuthLayout from "./_AuthLayout";
export default function Register() {
  return (
    <AuthLayout
    type="register"
      title="Create your account"
      subtitle="Save your favorites and make every checkout easy."
      action="Create account"
      extra="Already have an account? Sign in"
    />
  );
}
