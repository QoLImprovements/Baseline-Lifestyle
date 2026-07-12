/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706863",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 4.39,
    "energy_kcal": 106.0,
    "fat_g": 7.26,
    "fibre_g": 1.6,
    "folate_ug": 16.0,
    "iron_mg": 0.73,
    "magnesium_mg": 20.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 56.0,
    "potassium_mg": 241.0,
    "protein_g": 6.28,
    "salt_g": 0.755,
    "sat_fat_g": 0.987,
    "sodium_mg": 302.0,
    "sugar_g": 2.46,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 2.48,
    "vitamin_k_ug": 23.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706863",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
