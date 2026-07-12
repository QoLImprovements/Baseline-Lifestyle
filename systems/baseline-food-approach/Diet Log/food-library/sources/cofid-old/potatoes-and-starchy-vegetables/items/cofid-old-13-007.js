/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-old-13-007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, new, canned, re-heated, drained",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 15.1,
    "energy_kcal": 63.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.9,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 220.0,
    "protein_g": 1.5,
    "salt_g": 0.625,
    "sat_fat_g": 0.0,
    "sodium_mg": 250.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-007",
  "state": "Canned",
  "subcategory": "DAE",
  "tags": [
    "canned",
    "dae",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
