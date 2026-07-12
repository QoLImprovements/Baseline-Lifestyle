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
  "id": "cofid-current-18-493",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kidney, lamb, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 188.0,
    "fat_g": 10.3,
    "fibre_g": 0.0,
    "folate_ug": 70.0,
    "iron_mg": 11.2,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 350.0,
    "potassium_mg": 280.0,
    "protein_g": 23.7,
    "salt_g": 0.575,
    "sat_fat_g": 0.0,
    "sodium_mg": 230.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 110.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-493",
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
