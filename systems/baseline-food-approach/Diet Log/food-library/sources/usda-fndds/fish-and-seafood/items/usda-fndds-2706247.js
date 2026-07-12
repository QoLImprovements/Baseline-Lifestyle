/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-cup",
  "description": "Fish",
  "id": "usda-fndds-2706247",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Fish, eel",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 7.79,
    "energy_kcal": 273.0,
    "fat_g": 17.1,
    "fibre_g": 0.3,
    "folate_ug": 30.0,
    "iron_mg": 1.11,
    "magnesium_mg": 24.0,
    "omega3_g": 0.232,
    "phosphorus_mg": 242.0,
    "potassium_mg": 302.0,
    "protein_g": 20.6,
    "salt_g": 0.7925,
    "sat_fat_g": 3.72,
    "sodium_mg": 317.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 951.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 4.89,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706247",
  "state": "Unspecified",
  "subcategory": "Fish",
  "tags": [
    "fish",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
