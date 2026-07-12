/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "10 samples, kernels only",
  "id": "cofid-current-14-812",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cashew nuts, kernel only, roasted and salted",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 18.8,
    "energy_kcal": 611.0,
    "fat_g": 50.9,
    "fibre_g": 4.3,
    "folate_ug": 68.0,
    "iron_mg": 6.2,
    "magnesium_mg": 250.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 510.0,
    "potassium_mg": 730.0,
    "protein_g": 20.5,
    "salt_g": 0.725,
    "sat_fat_g": 10.1,
    "sodium_mg": 290.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-812",
  "state": "Roasted",
  "subcategory": "GA",
  "tags": [
    "ga",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
