/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Candy not containing chocolate",
  "id": "usda-fndds-2710351",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Ladoo, round ball",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 46.7,
    "energy_kcal": 411.0,
    "fat_g": 22.2,
    "fibre_g": 4.0,
    "folate_ug": 111.0,
    "iron_mg": 1.3,
    "magnesium_mg": 24.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 84.0,
    "potassium_mg": 196.0,
    "protein_g": 6.92,
    "salt_g": 0.35,
    "sat_fat_g": 11.4,
    "sodium_mg": 140.0,
    "sugar_g": 29.8,
    "vitamin_a_ug": 187.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710351",
  "state": "Unspecified",
  "subcategory": "Candy not containing chocolate",
  "tags": [
    "candy-not-containing-chocolate",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
