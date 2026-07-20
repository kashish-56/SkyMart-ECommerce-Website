import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyStore";
import { useContext } from "react";

export default function AuthLayout({ title, subtitle, action, extra,type }) {
  const navigate = useNavigate();
  const { user, setUser,setLoggedUser,loggedUser } = useContext(MyStore);
  console.log(user);
    //  console.log(loggedUser);

  let {
    register,
    handleSubmit,
    reset,
     setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  let handleRegister = (data) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      user => user.email === data.email
    );

    if (existingUser) {
  setError("email", {
    type: "manual",
    message: "An account with this email already exists.",
  });
  return;
}

    let updatedUsers = [...users, data];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(updatedUsers);
    reset()
    navigate('/login ');
  };

  let handleLogin = (data) => {
     const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
    (user) =>
      user.email === data.email &&
      user.password === data.password
  );
    
    if(validUser){
      const userDetail = users.filter(
       user => user.email === data.email
     );

    localStorage.setItem("loggedUser", JSON.stringify(userDetail));
    setLoggedUser(userDetail);
    reset();
    navigate('/ ');
    }

    else{
       setError("password", {
      type: "manual",
      message: "Invalid email or password.",
    });
    }

  };

  return (
    <main className="h-screen overflow-hidden bg-[#f6f3ec]">
      <div className="grid h-full lg:grid-cols-2">
        <section className="relative hidden h-full overflow-hidden bg-[#f6f3ec] px-14 py-10 lg:flex lg:flex-col justify-between border-r border-[#2d2d2d]">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#ed6b3b]/10 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#f2d6b8]/40 blur-3xl"></div>

          <div className="relative z-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ed6b3b]">
              Welcome to SkyMart
            </p>

            <h1 className="max-w-lg text-5xl font-bold leading-tight text-[#1e1d1a]">
              Shop Smarter.
              <br />
              Live Better.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-[#716d66]">
              Discover thousands of premium products with secure checkout,
              lightning-fast delivery, and unbeatable prices.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="relative z-10 grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[#ece4d8] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed6b3b]/10 text-2xl">
                🚚
              </div>

              <h3 className="font-semibold text-[#1e1d1a]">Fast Delivery</h3>

              <p className="mt-1 text-sm text-[#716d66]">
                Free shipping on eligible orders.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ece4d8] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed6b3b]/10 text-2xl">
                🔒
              </div>

              <h3 className="font-semibold text-[#1e1d1a]">Secure Payments</h3>

              <p className="mt-1 text-sm text-[#716d66]">
                Protected & trusted checkout.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ece4d8] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed6b3b]/10 text-2xl">
                ⭐
              </div>

              <h3 className="font-semibold text-[#1e1d1a]">Top Rated</h3>

              <p className="mt-1 text-sm text-[#716d66]">
                Loved by thousands of customers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ece4d8] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ed6b3b]/10 text-2xl">
                📦
              </div>

              <h3 className="font-semibold text-[#1e1d1a]">20K+ Products</h3>

              <p className="mt-1 text-sm text-[#716d66]">
                Electronics, Fashion & more.
              </p>
            </div>
          </div>
        </section>

        <section className="flex h-full items-center justify-center px-6">
          <form
  onSubmit={
    type === "login"
      ? handleSubmit(handleLogin)
      : handleSubmit(handleRegister)
  }
  className="w-full max-w-md rounded-3xl border border-[#ded9cf] bg-white p-8 shadow-xl"
>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ed6b3b]">
              SKYMART ACCOUNT
            </p>

            <h1 className="mb-3 text-4xl font-bold text-[#1e1d1a]">{title}</h1>

            <p className="mb-6 text-sm leading-6 text-[#716d66]">{subtitle}</p>

            {
              action === "Create account" && 
              <label className="mb-5 block">
  <span className="mb-2 block text-sm font-semibold text-[#1e1d1a]">
    Full Name
  </span>

  <input
    {...register("name", {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters",
      },
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: "Name can contain only letters",
      },
    })}
    type="text"
    placeholder="Enter your full name"
    className={`h-12 w-full rounded-xl px-4 outline-none transition duration-200
      ${
        errors.name
          ? "border border-red-500 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
          : "border border-[#ded9cf] focus:border-[#ed6b3b] focus:ring-4 focus:ring-[#ed6b3b]/20"
      }
    `}
  />

  {errors.name && (
    <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
      <svg
        className="h-4 w-4 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10A8 8 0 11 2 10a8 8 0 0116 0ZM9 5a1 1 0 012 0v5a1 1 0 11-2 0V5Zm1 9a1.25 1.25 0 100-2.5A1.25 1.25 0 0010 14Z"
          clipRule="evenodd"
        />
      </svg>

      <span>{errors.name.message}</span>
    </div>
  )}
</label>

            }
           <label className="mb-5 block">
  <span className="mb-2 block text-sm font-semibold text-[#1e1d1a]">
    Email Address
  </span>

  <input
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address",
      },
    })}
    type="email"
    placeholder="you@example.com"
    className={`h-12 w-full rounded-xl px-4 outline-none transition duration-200
      ${
        errors.email
          ? "border border-red-500 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
          : "border border-[#ded9cf] focus:border-[#ed6b3b] focus:ring-4 focus:ring-[#ed6b3b]/20"
      }
    `}
  />

  {errors.email && (
    <div className="mt-2 flex items-center gap-2 text-sm text-red-600 animate-pulse">
      <svg
        className="h-4 w-4 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10A8 8 0 11 2 10a8 8 0 0116 0ZM9 5a1 1 0 012 0v5a1 1 0 11-2 0V5Zm1 9a1.25 1.25 0 100-2.5A1.25 1.25 0 0010 14Z"
          clipRule="evenodd"
        />
      </svg>

      <span>{errors.email.message}</span>
    </div>
  )}
</label>

         <label className="mb-7 block">
  <span className="mb-2 block text-sm font-semibold text-[#1e1d1a]">
    Password
  </span>

  <input
    {...register("password", {
      required: "Password is required",
      minLength: {
        value: 10,
        message: "Password must be at least 10 characters",
      },
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
        message:
          "Use uppercase, lowercase, number and special character",
      },
    })}
    type="password"
    placeholder="••••••••"
    className={`h-12 w-full rounded-xl px-4 outline-none transition duration-200
      ${
        errors.password
          ? "border border-red-500 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
          : "border border-[#ded9cf] focus:border-[#ed6b3b] focus:ring-4 focus:ring-[#ed6b3b]/20"
      }
    `}
  />

  {errors.password && (
    <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
      <svg
        className="h-4 w-4 shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10A8 8 0 11 2 10a8 8 0 0116 0ZM9 5a1 1 0 012 0v5a1 1 0 11-2 0V5Zm1 9a1.25 1.25 0 100-2.5A1.25 1.25 0 0010 14Z"
          clipRule="evenodd"
        />
      </svg>

      <span>{errors.password.message}</span>
    </div>
  )}
</label>

            <Button
              // onClick={() =>
              //   action === "Create account"
              //     ? navigate("/login")
              //     : navigate("/register")
              // }
              className="w-full"
            >
              {action} →
            </Button>

            <small
              onClick={() =>
                extra === "Already have an account? Sign in"
                  ? navigate("/login")
                  : navigate("/register")
              }
              className="mt-6 block cursor-pointer text-center text-sm text-[#716d66] transition hover:text-[#ed6b3b]"
            >
              {extra}
            </small>
          </form>
        </section>
      </div>
    </main>
  );
}
