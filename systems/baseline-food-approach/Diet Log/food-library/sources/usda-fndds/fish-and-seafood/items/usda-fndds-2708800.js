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
  "id": "usda-fndds-2708800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lo mein, with shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 16.2,
    "energy_kcal": 121.0,
    "fat_g": 2.21,
    "fibre_g": 1.0,
    "folate_ug": 27.0,
    "iron_mg": 0.91,
    "magnesium_mg": 19.0,
    "omega3_g": 0.061,
    "phosphorus_mg": 100.0,
    "potassium_mg": 119.0,
    "protein_g": 8.56,
    "salt_g": 0.9075,
    "sat_fat_g": 0.476,
    "sodium_mg": 363.0,
    "sugar_g": 2.08,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 10.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708800",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fish-and-seafood",
    "fried-rice-and-lo-chow-mein",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
