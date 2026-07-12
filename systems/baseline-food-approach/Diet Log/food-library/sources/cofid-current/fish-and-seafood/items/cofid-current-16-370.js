/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products",
  "id": "cofid-current-16-370",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, in breadcrumbs, baked",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 19.8,
    "energy_kcal": 204.0,
    "fat_g": 8.3,
    "fibre_g": 1.9,
    "folate_ug": 7.0,
    "iron_mg": 0.54,
    "magnesium_mg": 22.0,
    "omega3_g": 0.5,
    "phosphorus_mg": 137.0,
    "potassium_mg": 245.0,
    "protein_g": 13.7,
    "salt_g": 0.825,
    "sat_fat_g": 1.33,
    "sodium_mg": 330.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-370",
  "state": "Baked",
  "subcategory": "JA",
  "tags": [
    "baked",
    "fish-and-seafood",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
