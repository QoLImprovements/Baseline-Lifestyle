/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands. Fresh and frozen",
  "id": "cofid-current-11-548",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, lemon meringue, retail",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 43.5,
    "energy_kcal": 251.0,
    "fat_g": 8.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.03,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 70.0,
    "protein_g": 2.9,
    "salt_g": 0.2825,
    "sat_fat_g": 3.09,
    "sodium_mg": 113.0,
    "sugar_g": 29.3,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-548",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
