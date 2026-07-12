/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, fried, with shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 27.8,
    "energy_kcal": 166.0,
    "fat_g": 2.97,
    "fibre_g": 0.9,
    "folate_ug": 9.0,
    "iron_mg": 0.44,
    "magnesium_mg": 14.0,
    "omega3_g": 0.043,
    "phosphorus_mg": 83.0,
    "potassium_mg": 84.0,
    "protein_g": 6.68,
    "salt_g": 0.81,
    "sat_fat_g": 0.497,
    "sodium_mg": 324.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708956",
  "state": "Fried",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fish-and-seafood",
    "fried",
    "fried-rice-and-lo-chow-mein"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
