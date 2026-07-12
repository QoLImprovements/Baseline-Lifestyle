/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Greek dish. Fried potatoes with onion and egg. Recipe from a personal collection",
  "id": "cofid-current-15-261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes with onions and eggs, fried",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 19.1,
    "energy_kcal": 316.0,
    "fat_g": 23.8,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 1.4,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 400.0,
    "protein_g": 7.8,
    "salt_g": 1.35,
    "sat_fat_g": 4.3,
    "sodium_mg": 540.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 4.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-261",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
