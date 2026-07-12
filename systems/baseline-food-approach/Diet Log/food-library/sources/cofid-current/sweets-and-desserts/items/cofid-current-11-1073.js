/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe. Ref. Wiles et al. (1980)",
  "id": "cofid-current-11-1073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, fruit, pastry top and bottom, blackcurrant, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 31.0,
    "energy_kcal": 264.0,
    "fat_g": 15.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.11,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 224.0,
    "protein_g": 3.2,
    "salt_g": 0.2725,
    "sat_fat_g": 5.6,
    "sodium_mg": 109.0,
    "sugar_g": 12.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 72.0,
    "vitamin_e_mg": 2.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1073",
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
