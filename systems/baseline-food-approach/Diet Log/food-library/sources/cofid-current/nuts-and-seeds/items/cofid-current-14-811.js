/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "20 samples, whole and broken kernels",
  "id": "cofid-current-14-811",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cashew nuts, kernel only, plain",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 18.1,
    "energy_kcal": 573.0,
    "fat_g": 48.2,
    "fibre_g": 0.0,
    "folate_ug": 67.0,
    "iron_mg": 6.2,
    "magnesium_mg": 270.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 560.0,
    "potassium_mg": 710.0,
    "protein_g": 17.7,
    "salt_g": 0.0375,
    "sat_fat_g": 9.5,
    "sodium_mg": 15.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-811",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
