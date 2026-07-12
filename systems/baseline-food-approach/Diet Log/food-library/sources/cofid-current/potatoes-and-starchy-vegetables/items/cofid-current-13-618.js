/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "IFR, average of Desiree, King Edward, Pentland Crown, Maris Piper over 6 seasons, flesh only",
  "id": "cofid-current-13-618",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, new and salad, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 16.1,
    "energy_kcal": 68.0,
    "fat_g": 0.1,
    "fibre_g": 1.8,
    "folate_ug": 25.0,
    "iron_mg": 0.11,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 320.0,
    "protein_g": 1.7,
    "salt_g": 0.0075,
    "sat_fat_g": 0.04,
    "sodium_mg": 3.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-618",
  "state": "Raw",
  "subcategory": "DAE",
  "tags": [
    "dae",
    "potatoes-and-starchy-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
