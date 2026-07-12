/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. Ref. Wiles et al. (1980). Apple, gooseberry, plum, rhubarb",
  "id": "cofid-current-11-1076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, fruit, wholemeal, pastry top and bottom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 30.0,
    "energy_kcal": 253.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 1.3,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 199.0,
    "protein_g": 4.0,
    "salt_g": 0.4125,
    "sat_fat_g": 4.23,
    "sodium_mg": 165.0,
    "sugar_g": 12.1,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1076",
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
