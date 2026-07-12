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
  "id": "cofid-current-11-1025",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, apple, pastry top and bottom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 32.1,
    "energy_kcal": 268.0,
    "fat_g": 15.2,
    "fibre_g": 2.4,
    "folate_ug": 2.0,
    "iron_mg": 0.54,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 89.0,
    "protein_g": 2.9,
    "salt_g": 0.2725,
    "sat_fat_g": 5.63,
    "sodium_mg": 109.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1025",
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
