import FoodCard from "./_components/_features/FoodCard";
import Categories from "./_components/Categories";
import DishesCategory from "./_components/DishesCategory";

export default function FoodPage() {
  return (
    <>
      <div className="bg-gray-100 w-full h-screen flex flex-col gap-10 items-center">
        <DishesCategory />
        <Categories/>
        <FoodCard/>
      </div>
      
      
    </>
  );
}
