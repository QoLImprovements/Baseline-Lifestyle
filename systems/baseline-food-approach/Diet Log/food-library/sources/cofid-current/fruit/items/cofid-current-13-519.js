/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "21 samples, autumn and winter, UK grown and imported, 'on the vine' and loose",
  "id": "cofid-current-13-519",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomatoes, cherry, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 3.6,
    "energy_kcal": 22.0,
    "fat_g": 0.5,
    "fibre_g": 1.3,
    "folate_ug": 24.0,
    "iron_mg": 0.34,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 274.0,
    "protein_g": 1.1,
    "salt_g": 0.01,
    "sat_fat_g": 0.1,
    "sodium_mg": 4.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-519",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
