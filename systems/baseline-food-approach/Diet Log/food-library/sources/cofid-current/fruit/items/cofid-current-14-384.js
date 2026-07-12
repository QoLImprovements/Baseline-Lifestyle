/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "11 samples, imported, pink, red and white",
  "id": "cofid-current-14-384",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grapefruit, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 23.2,
    "carbs_g": 6.94,
    "energy_kcal": 34.077,
    "fat_g": 0.5,
    "fibre_g": 0.9,
    "folate_ug": 23.0,
    "iron_mg": 0.09,
    "magnesium_mg": 8.21,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.25,
    "potassium_mg": 129.0,
    "protein_g": 0.888,
    "salt_g": 0.00195,
    "sat_fat_g": 0.07,
    "sodium_mg": 0.78,
    "sugar_g": 6.94,
    "vitamin_a_ug": 51.666667,
    "vitamin_c_mg": 35.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.01
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-384",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
