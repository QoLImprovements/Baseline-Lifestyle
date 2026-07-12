/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz",
  "description": "Milk, whole",
  "id": "usda-fndds-2705399",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 2.6,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "guideline-amount-per-cup-of-hot-cereal",
      "kind": "unit",
      "label": "Guideline amount per cup of hot cereal"
    }
  ],
  "name": "Milk, evaporated, whole",
  "nutritionPerBasis": {
    "calcium_mg": 261.0,
    "carbs_g": 10.0,
    "energy_kcal": 134.0,
    "fat_g": 7.56,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.19,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 203.0,
    "potassium_mg": 303.0,
    "protein_g": 6.81,
    "salt_g": 0.265,
    "sat_fat_g": 4.59,
    "sodium_mg": 106.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705399",
  "state": "Unspecified",
  "subcategory": "Milk, whole",
  "tags": [
    "milk-dairy-and-eggs",
    "milk-whole",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
