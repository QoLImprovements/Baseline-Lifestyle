/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "8 samples, 6 brands",
  "id": "cofid-current-19-114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Black pudding, dry-fried",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 16.6,
    "energy_kcal": 297.0,
    "fat_g": 21.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 12.3,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 110.0,
    "protein_g": 10.3,
    "salt_g": 2.35,
    "sat_fat_g": 8.5,
    "sodium_mg": 940.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-114",
  "state": "Fried",
  "subcategory": "MI",
  "tags": [
    "fried",
    "mi",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
