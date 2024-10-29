import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-4 px-4 sm:px-6 lg:px-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category === selectedCategory ? null : category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
            ${selectedCategory === category 
              ? 'bg-black text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}