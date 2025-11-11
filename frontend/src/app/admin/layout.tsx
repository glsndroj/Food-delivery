import { FoodmenuSvg } from "@/svgs/foodmenuSVG";
import { Nomnom } from "@/svgs/nomnomSVG";
import { Order } from "@/svgs/orderTruckSVG";
import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      
      <div className="sidebarContainer w-[205px] h-screen bg-white shadow-md">
        <div className="flex flex-col gap-20 py-9 px-5">
         
          <div className="flex items-center gap-3">
            <Nomnom />
            <div>
              <h2 className="text-[18px] font-semibold">Nom Nom</h2>
              <p className="text-[12px] font-normal text-[#71717A]">
                Swift delivery
              </p>
            </div>
          </div>

          
          <div className="menuContainer flex flex-col gap-5">
            <Link
              href="/admin/food"
              className="dashboardContainer flex gap-3 items-center pl-6 p-3 rounded-3xl hover:bg-gray-100"
            >
              <FoodmenuSvg />
              <p className="text-[14px] font-medium">Food menu</p>
            </Link>

            <Link
              href="/admin/order"
              className="orderContainer flex gap-3 items-center pl-6 p-3 rounded-3xl hover:bg-gray-100"
            >
              <Order />
              <p className="text-[14px] font-medium">Orders</p>
            </Link>
          </div>
        </div>
      </div>

     
      <main className="flex-1 bg-gray-50 ">{children}</main>
    </div>
  );
}
