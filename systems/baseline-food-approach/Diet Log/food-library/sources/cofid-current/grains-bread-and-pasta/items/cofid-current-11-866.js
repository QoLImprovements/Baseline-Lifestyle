/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 5 products",
  "id": "cofid-current-11-866",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, brown, basmati, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 77.6,
    "energy_kcal": 355.0,
    "fat_g": 3.1,
    "fibre_g": 3.3,
    "folate_ug": 29.0,
    "iron_mg": 3.03,
    "magnesium_mg": 119.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 309.0,
    "potassium_mg": 226.0,
    "protein_g": 8.9,
    "salt_g": 0.0025,
    "sat_fat_g": 0.58,
    "sodium_mg": 1.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-866",
  "state": "Raw",
  "subcategory": "AC",
  "tags": [
    "ac",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
