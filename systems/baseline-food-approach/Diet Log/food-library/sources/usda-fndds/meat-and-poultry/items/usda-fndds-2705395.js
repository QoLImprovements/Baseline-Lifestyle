/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "guideline-amount-per-cup-of-hot-cereal",
  "description": "Milk, whole",
  "id": "usda-fndds-2705395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "guideline-amount-per-cup-of-hot-cereal",
      "kind": "unit",
      "label": "Guideline amount per cup of hot cereal"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    }
  ],
  "name": "Goat milk",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 4.45,
    "energy_kcal": 69.0,
    "fat_g": 4.14,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.05,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 204.0,
    "protein_g": 3.56,
    "salt_g": 0.125,
    "sat_fat_g": 2.67,
    "sodium_mg": 50.0,
    "sugar_g": 4.45,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705395",
  "state": "Unspecified",
  "subcategory": "Milk, whole",
  "tags": [
    "meat-and-poultry",
    "milk-whole",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
