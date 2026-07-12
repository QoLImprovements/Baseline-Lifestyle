/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from 16-424, sunflower oil and industry data, 2013",
  "id": "cofid-current-16-439",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sardines, canned in sunflower oil, drained",
  "nutritionPerBasis": {
    "calcium_mg": 500.0,
    "carbs_g": 0.0,
    "energy_kcal": 220.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.3,
    "magnesium_mg": 46.0,
    "omega3_g": 2.51,
    "phosphorus_mg": 520.0,
    "potassium_mg": 410.0,
    "protein_g": 23.3,
    "salt_g": 1.0,
    "sat_fat_g": 3.21,
    "sodium_mg": 400.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-439",
  "state": "Canned",
  "subcategory": "JC",
  "tags": [
    "canned",
    "jc",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
