/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, skin and core removed",
  "id": "cofid-current-18-407",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kidney, pig, fried",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 202.0,
    "fat_g": 9.5,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 9.1,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 430.0,
    "potassium_mg": 400.0,
    "protein_g": 29.2,
    "salt_g": 0.55,
    "sat_fat_g": 0.0,
    "sodium_mg": 220.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-407",
  "state": "Fried",
  "subcategory": "MG",
  "tags": [
    "fried",
    "meat-and-poultry",
    "mg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
