/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "6 samples; stir-fried 2 minutes. And calculated from raw",
  "id": "cofid-current-13-567",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beansprouts, mung, stir-fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.5,
    "energy_kcal": 72.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 1.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 45.0,
    "protein_g": 1.9,
    "salt_g": 0.0075,
    "sat_fat_g": 0.47,
    "sodium_mg": 3.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 6.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-567",
  "state": "Fried",
  "subcategory": "DB",
  "tags": [
    "db",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
