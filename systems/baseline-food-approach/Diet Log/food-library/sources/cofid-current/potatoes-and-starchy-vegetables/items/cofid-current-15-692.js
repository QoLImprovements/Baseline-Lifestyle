/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from literature sources",
  "id": "cofid-current-15-692",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, potato, with butter ghee, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 16.6,
    "energy_kcal": 161.0,
    "fat_g": 9.8,
    "fibre_g": 2.1,
    "folate_ug": 7.0,
    "iron_mg": 1.08,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 467.0,
    "protein_g": 2.2,
    "salt_g": 0.01,
    "sat_fat_g": 5.7,
    "sodium_mg": 4.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 123.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.83
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-692",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
