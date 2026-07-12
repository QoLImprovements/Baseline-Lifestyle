/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 cans, 7 brands",
  "id": "cofid-current-12-580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, rice, canned",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 16.1,
    "energy_kcal": 85.0,
    "fat_g": 1.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.1,
    "magnesium_mg": 12.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 86.0,
    "potassium_mg": 130.0,
    "protein_g": 3.3,
    "salt_g": 0.1075,
    "sat_fat_g": 0.76,
    "sodium_mg": 43.0,
    "sugar_g": 8.7,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-580",
  "state": "Canned",
  "subcategory": "BR",
  "tags": [
    "br",
    "canned",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
