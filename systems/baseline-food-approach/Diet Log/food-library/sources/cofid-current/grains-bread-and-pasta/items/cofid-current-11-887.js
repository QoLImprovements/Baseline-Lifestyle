/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products",
  "id": "cofid-current-11-887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flour, wheat, bread/strong, white",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 79.2,
    "energy_kcal": 353.0,
    "fat_g": 1.2,
    "fibre_g": 3.3,
    "folate_ug": 16.0,
    "iron_mg": 1.92,
    "magnesium_mg": 26.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 128.0,
    "potassium_mg": 166.0,
    "protein_g": 11.3,
    "salt_g": 0.005,
    "sat_fat_g": 0.31,
    "sodium_mg": 2.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-887",
  "state": "Unspecified",
  "subcategory": "AA",
  "tags": [
    "aa",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
