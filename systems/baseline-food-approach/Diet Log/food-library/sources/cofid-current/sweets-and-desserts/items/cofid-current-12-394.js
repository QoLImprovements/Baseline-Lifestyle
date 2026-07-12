/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands including two Mississippi mud pies",
  "id": "cofid-current-12-394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, banoffee",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 32.9,
    "energy_kcal": 319.0,
    "fat_g": 20.0,
    "fibre_g": 1.8,
    "folate_ug": 5.0,
    "iron_mg": 0.34,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 163.0,
    "protein_g": 3.8,
    "salt_g": 0.41,
    "sat_fat_g": 11.2,
    "sodium_mg": 164.0,
    "sugar_g": 20.9,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-394",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
