/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1037",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, bread and butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 17.0,
    "energy_kcal": 137.0,
    "fat_g": 5.3,
    "fibre_g": 0.3,
    "folate_ug": 10.0,
    "iron_mg": 0.57,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 215.0,
    "protein_g": 6.3,
    "salt_g": 0.325,
    "sat_fat_g": 2.11,
    "sodium_mg": 130.0,
    "sugar_g": 12.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.05
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1037",
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
