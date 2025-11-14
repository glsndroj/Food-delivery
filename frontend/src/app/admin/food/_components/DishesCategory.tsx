"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

export default function DishesCategory() {
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>(
    []
  );
  const [newCategory, setNewCategory] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/foodcategory");
      const data = await res.json();
      setCategories(data.data || []);
    } catch (error) {
      console.error("Fetch category error", error);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/foodcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newCategory }),
      });

      if (!res.ok) throw new Error("Failed to create category!");

      const data = await res.json();
      console.log("Category response:", data);

      setCategories((prev) => [...prev, data.data]);

      setNewCategory("");
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Create category error: ", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    
      <div className="dishesCategory w-[1671px] h-fit bg-white flex items-center flex-wrap py-2 px-4 rounded-md">
        <div>
          <h2 className="text-[20px] font-semibold">Dishes Category</h2>

          <div className="flex gap-4 flex-wrap mt-4">
            {categories.length > 0 ? (
              categories.map((cat) => (
                <div
                  key={cat._id}
                  className="px-4 py-2 bg-gray-100 rounded-4xl border shadow-sm text-gray-800 font-medium"
                >
                  {cat.name}
                </div>
              ))
            ) : (
              <p className="text-gray-400">No categories yet</p>
            )}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-[#EF4444] px-3 py-2 rounded-4xl text-white"
            >
              +
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add category</DialogTitle>
              <DialogDescription>Category name</DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-2 mt-4">
              <Input
                placeholder="Enter category name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </div>

            <DialogFooter className="sm:justify-end mt-4">
              <Button onClick={handleAddCategory} className="bg-[#18181B]">
                Add category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
          </div>
          
        </div>

        
      </div>
    
  );
}
