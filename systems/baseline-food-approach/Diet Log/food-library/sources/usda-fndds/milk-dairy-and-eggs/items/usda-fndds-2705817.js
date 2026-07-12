/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-piece-or-stick-4-x-1-x-3-4",
  "description": "Cheese",
  "id": "usda-fndds-2705817",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-piece-or-stick-4-x-1-x-3-4",
      "kind": "unit",
      "label": "1 piece or stick (4\" x 1\" x 3/4\")"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 14.7,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-nugget",
      "kind": "unit",
      "label": "1 nugget"
    }
  ],
  "name": "Mozzarella sticks, breaded, baked, or fried",
  "nutritionPerBasis": {
    "calcium_mg": 334.0,
    "carbs_g": 25.1,
    "energy_kcal": 325.0,
    "fat_g": 18.3,
    "fibre_g": 2.0,
    "folate_ug": 26.0,
    "iron_mg": 0.62,
    "magnesium_mg": 21.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 318.0,
    "potassium_mg": 108.0,
    "protein_g": 14.8,
    "salt_g": 2.1525,
    "sat_fat_g": 6.85,
    "sodium_mg": 861.0,
    "sugar_g": 2.36,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 22.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705817",
  "state": "Baked",
  "subcategory": "Cheese",
  "tags": [
    "baked",
    "cheese",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
