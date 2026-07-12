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
  "id": "cofid-current-11-1120",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, sponge, with dried fruit, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 50.5,
    "energy_kcal": 332.0,
    "fat_g": 13.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.2,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 174.0,
    "potassium_mg": 207.0,
    "protein_g": 5.5,
    "salt_g": 0.6925,
    "sat_fat_g": 4.24,
    "sodium_mg": 277.0,
    "sugar_g": 25.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1120",
  "state": "Dried",
  "subcategory": "AS",
  "tags": [
    "as",
    "dried",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
