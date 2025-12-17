"use client";
import { useEffect, useState } from "react";

interface Food {
  _id: string;
  image?: string;
  name: string;
  price?: number;
  description?: string;
}

interface Category {
  _id: string;
  name: string;
  foods?: Food[];
}

export default function CategoriesMap() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/foodcategory");
      const json = await res.json();

      setCategories(json.data || []);
    } catch (error) {
      console.error("Fetch categories error", error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="CategoryContainer w-[1671px] h-fit bg-white rounded-md "></div>
  );
}
