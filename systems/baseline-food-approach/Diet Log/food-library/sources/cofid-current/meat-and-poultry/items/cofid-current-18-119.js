/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 76% lean and 24% fat",
  "id": "cofid-current-18-119",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, chump chops, fried, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 308.0,
    "fat_g": 23.2,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 2.1,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 360.0,
    "protein_g": 24.7,
    "salt_g": 0.18,
    "sat_fat_g": 10.8,
    "sodium_mg": 72.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-119",
  "state": "Fried",
  "subcategory": "MAE",
  "tags": [
    "fried",
    "mae",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
