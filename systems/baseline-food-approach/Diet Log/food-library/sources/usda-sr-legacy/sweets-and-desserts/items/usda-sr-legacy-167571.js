/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-3-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167571",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "bar-3-oz",
      "kind": "unit",
      "label": "bar (3 oz)"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-chips",
      "kind": "unit",
      "label": "cup chips"
    }
  ],
  "name": "Candies, white chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 199.0,
    "carbs_g": 59.2,
    "energy_kcal": 2250.0,
    "fat_g": 32.1,
    "fibre_g": 0.2,
    "folate_ug": 7.0,
    "iron_mg": 0.24,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 176.0,
    "potassium_mg": 286.0,
    "protein_g": 5.87,
    "salt_g": 0.225,
    "sat_fat_g": 19.4,
    "sodium_mg": 90.0,
    "sugar_g": 59.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167571",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
