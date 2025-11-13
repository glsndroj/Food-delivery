import { Nomnom } from "@/svgs/nomnomSVG";

export default function Footer(){
    return(
        <div className="footerContainer bg-[#18181B] w-full h-[755px] flex flex-col justify-center items-center">
            <div className="w-full h-[92px] bg-[#EF4444] flex text-white text-[25px] gap-8 font-semibold items-center justify-center">
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
                <p>Fresh fast delivered</p>
            </div>
            <div className="flex gap-[200px] w-full h-[300px] justify-between px-[200px] mt-[100px]">
                <div className="flex flex-col">
                <Nomnom/>
                <div>
                <h2 className="text-white font-semibold ">Nom<span className="text-red-500">Nom</span></h2>
                <p className="text-[#F4F4F5] text-[12px]">Swift delivery</p>
                </div>
                </div>
                <div className="  text-[#FAFAFA] ">
                    <h3 className="text-[#71717A]">NOMNOM</h3>
                    <h3>Home</h3>
                    <h3>Contact us</h3>
                    <h3>Delivery zone</h3>
                </div>
                <div className=" flex flex-col gap-3 text-[#FAFAFA] ">
                    <h3 className="text-[#71717A]">MENU</h3>
                    <h3>Appetizers</h3>
                    <h3>Salads</h3>
                    <h3>Pizzas</h3>
                    <h3>Lunch favorites</h3>
                    <h3>Main dishes</h3>
                </div>
                <div className=" flex flex-col gap-3 text-[#FAFAFA] ">
                    <h3><br></br></h3>
                    <h3>Side dish</h3>
                    <h3>Brunch</h3>
                    <h3>Desserts</h3>
                    <h3>Beverages</h3>
                    <h3>Fish & Seafoods</h3>
                </div>
                <div>
                    <h3 className="flex flex-col gap-3 text-[#71717A]">FOLLOW US</h3>
                    <div className="flex w-7 h-[27px] gap-4">
                        <img src="/fb.png" alt="" />
                        <img src="/ig.png" alt="" />
                    </div>

                </div>
            </div>
            <div className="w-[1264px] h-5 border-t flex gap-12 text-[#71717A]">
                <div className="flex gap-2">
                    <p>Copy right 2025</p>
                    <p>©</p>
                    <p>Nomnom LLC</p>
                </div>
                <div className="flex gap-10">
                <p>Privacy policy</p>
                <p>Terms and condition</p>
                <p>Cookie policy</p>
                </div>
                

            </div>
        </div>
    )
}