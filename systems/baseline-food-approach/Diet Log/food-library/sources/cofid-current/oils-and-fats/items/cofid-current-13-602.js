/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from 13-517",
  "id": "cofid-current-13-602",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomatoes, standard, fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 4.5,
    "energy_kcal": 89.0,
    "fat_g": 7.7,
    "fibre_g": 1.5,
    "folate_ug": 15.0,
    "iron_mg": 0.37,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 332.0,
    "protein_g": 0.8,
    "salt_g": 0.0075,
    "sat_fat_g": 0.53,
    "sodium_mg": 3.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 7.69
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-602",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
