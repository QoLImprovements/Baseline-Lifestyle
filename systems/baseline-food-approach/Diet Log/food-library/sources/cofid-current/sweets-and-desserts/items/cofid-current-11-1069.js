/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. Apple and tinned gooseberry, plum, rhubarb",
  "id": "cofid-current-11-1069",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, pastry, with fruit, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 18.3,
    "energy_kcal": 105.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.42,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 99.0,
    "protein_g": 1.2,
    "salt_g": 0.0875,
    "sat_fat_g": 1.14,
    "sodium_mg": 35.0,
    "sugar_g": 11.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1069",
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
