/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Finfish and Shellfish Products",
  "id": "usda-foundation-2747652",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Anchovies, canned in olive oil, with salt, drained",
  "nutritionPerBasis": {
    "calcium_mg": 240.0,
    "carbs_g": 2.41,
    "energy_kcal": 206.0,
    "fat_g": 9.85,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.69,
    "magnesium_mg": 228.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 226.0,
    "potassium_mg": 298.0,
    "protein_g": 26.9,
    "salt_g": 13.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 5400.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747652",
  "state": "Canned",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "canned",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
