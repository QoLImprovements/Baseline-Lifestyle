/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-368 and 16-022",
  "id": "cofid-current-16-427",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, in batter, fried in dripping, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 10.7,
    "energy_kcal": 240.0,
    "fat_g": 14.7,
    "fibre_g": 0.5,
    "folate_ug": 16.0,
    "iron_mg": 0.39,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 208.0,
    "potassium_mg": 326.0,
    "protein_g": 16.8,
    "salt_g": 0.4375,
    "sat_fat_g": 8.21,
    "sodium_mg": 175.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-427",
  "state": "Fried",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "fried",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
