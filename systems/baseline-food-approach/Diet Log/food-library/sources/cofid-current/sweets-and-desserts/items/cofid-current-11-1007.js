/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. Apple, gooseberry, plum, rhubarb",
  "id": "cofid-current-11-1007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, fruit, one crust, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 26.7,
    "energy_kcal": 190.0,
    "fat_g": 9.1,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.48,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 162.0,
    "protein_g": 2.1,
    "salt_g": 0.165,
    "sat_fat_g": 3.3,
    "sodium_mg": 66.0,
    "sugar_g": 15.7,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1007",
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
