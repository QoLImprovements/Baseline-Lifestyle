/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, including spirali, farfalle, fusilli, penne, pennette",
  "id": "cofid-current-11-717",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta shapes, coloured, flavoured, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 75.4,
    "energy_kcal": 341.0,
    "fat_g": 1.6,
    "fibre_g": 5.5,
    "folate_ug": 26.0,
    "iron_mg": 1.66,
    "magnesium_mg": 50.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 174.0,
    "potassium_mg": 301.0,
    "protein_g": 11.0,
    "salt_g": 0.02,
    "sat_fat_g": 0.23,
    "sodium_mg": 8.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-717",
  "state": "Dried",
  "subcategory": "AD",
  "tags": [
    "ad",
    "dried",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
