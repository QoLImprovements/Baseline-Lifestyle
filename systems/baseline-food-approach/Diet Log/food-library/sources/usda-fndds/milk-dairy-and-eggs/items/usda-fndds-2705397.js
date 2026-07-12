/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "guideline-amount-per-cup-of-hot-cereal",
  "description": "Milk, whole",
  "id": "usda-fndds-2705397",
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
      "gramsPerUnit": 2.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Milk, dry, reconstituted, whole",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 5.86,
    "energy_kcal": 76.0,
    "fat_g": 4.08,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.07,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 203.0,
    "protein_g": 4.01,
    "salt_g": 0.15,
    "sat_fat_g": 2.55,
    "sodium_mg": 60.0,
    "sugar_g": 5.86,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705397",
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
