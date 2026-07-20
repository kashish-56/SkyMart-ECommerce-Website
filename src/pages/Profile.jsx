import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
  const loggedData = JSON.parse(localStorage.getItem("loggedUser")) || [];

const userData = loggedData[0] || {
  name: "User",
  email: "user@gmail.com",
  password: ""
};


const allUsers = JSON.parse(localStorage.getItem("users")) || [];

const orders = JSON.parse(localStorage.getItem("orders")) || [];

const [showUpdate, setShowUpdate] = useState(false);
const [showOrders, setShowOrders] = useState(false);


const [user, setUser] = useState(userData);




  const updateProfile = () => {


  const updatedLoggedUser = [
    {
      ...user
    }
  ];


  localStorage.setItem(
    "loggedUser",
    JSON.stringify(updatedLoggedUser)
  );



  const updatedUsers = allUsers.map((item)=>{

    if(item.email === userData.email){

      return {
        ...item,
        name:user.name,
        email:user.email,
        password:user.password
      };

    }

    return item;

  });



  localStorage.setItem(
    "users",
    JSON.stringify(updatedUsers)
  );


  setShowUpdate(false);
};


  return (
    <>
      <Navbar />

      <main className="min-h-[70vh] bg-[#f6f3ec] px-5 py-16 md:px-10 lg:px-16 lg:py-24">

        <div className="mx-auto max-w-5xl">

          <p className="mb-3 text-[11px] font-bold tracking-[0.14em] text-[#ed6b3b]">
            MY ACCOUNT
          </p>


          <h1 className="mb-12 text-5xl font-medium tracking-tighter text-[#1e1d1a]">
            Hi, {user.name}
          </h1>


          <div className="grid gap-6 md:grid-cols-2">


            <div className="rounded-xl border border-[#ded9cf] bg-white p-8 shadow-sm hover:shadow-md transition">

              <h2 className="text-xl font-semibold text-[#1e1d1a] mb-5">
                Account Details
              </h2>


              <div className="space-y-3 text-[#716d66]">

                <p>
                  <span className="font-semibold text-black">
                    Name:
                  </span>{" "}
                  {user.name}
                </p>


                <p>
                  <span className="font-semibold text-black">
                    Email:
                  </span>{" "}
                  {user.email}
                </p>

              </div>



              <button
                onClick={()=>setShowUpdate(true)}
                className="mt-8 text-sm font-bold hover:text-[#ed6b3b]"
              >
                Update profile →
              </button>

            </div>

            <div className="rounded-xl border border-[#ded9cf] bg-white p-8 shadow-sm hover:shadow-md transition">


              <h2 className="text-xl font-semibold text-[#1e1d1a] mb-5">
                Orders
              </h2>


              <p className="text-[#716d66]">
                {orders.length} products ordered
              </p>



              <button
                onClick={()=>setShowOrders(true)}
                className="mt-8 text-sm font-bold hover:text-[#ed6b3b]"
              >
                View all orders →
              </button>


            </div>


          </div>

        </div>

      </main>


      {
        showUpdate && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">


          <div className="w-95 rounded-3xl bg-white p-8 shadow-xl">


            <h2 className="mb-6 text-2xl font-bold">
              Update Profile
            </h2>


            <input
              value={user.name}
              onChange={(e)=>
                setUser({...user,name:e.target.value})
              }
              className="mb-4 w-full rounded-xl border p-3"
              placeholder="Name"
            />


            <input
              value={user.email}
              onChange={(e)=>
                setUser({...user,email:e.target.value})
              }
              className="mb-6 w-full rounded-xl border p-3"
              placeholder="Email"
            />

            <input
  type="password"
  value={user.password}
  onChange={(e)=>
    setUser({
      ...user,
      password:e.target.value
    })
  }
  className="mb-4 w-full rounded-xl border p-3"
  placeholder="Password"
/>


            <div className="flex gap-3">

              <button
                onClick={()=>setShowUpdate(false)}
                className="flex-1 rounded-xl border py-3"
              >
                Cancel
              </button>


              <button
                onClick={updateProfile}
                className="flex-1 rounded-xl bg-[#ed6b3b] text-white py-3"
              >
                Save
              </button>

            </div>


          </div>


        </div>

        )
      }

      {
        showOrders && (

        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 p-5 cart-scroll">


          <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-8">


            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                Your Orders
              </h2>


              <button
                onClick={()=>setShowOrders(false)}
                className="text-xl"
              >
                ✕
              </button>

            </div>



            {
              orders.length === 0 ?

              <p className="text-gray-500">
                No orders found
              </p>

              :

              <div className="space-y-5">


              {
                orders.map((item)=>(
                  
                  <div
                    key={item.id}
                    className="flex gap-5 rounded-2xl border p-5"
                  >


                    <img
                      src={item.thumbnail}
                      className="h-24 w-24 rounded-xl object-cover"
                    />


                    <div className="flex-1">


                      <h3 className="font-semibold">
                        {item.title}
                      </h3>


                      <p className="text-sm text-gray-500">
                        Category: {item.category}
                      </p>


                      <p className="mt-2 font-bold">
                        ₹ {item.price}
                      </p>



                      <span className="inline-block mt-2 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                        Order Confirmed
                      </span>


                    </div>


                  </div>

                ))
              }


              </div>

            }



          </div>


        </div>

        )
      }



      <Footer />

    </>
  );
}