/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "12 samples, including penne, fusilli, conchiglie, tagliatelle, spaghetti",
  "id": "cofid-current-11-716",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, white, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 75.6,
    "energy_kcal": 343.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.59,
    "magnesium_mg": 47.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 179.0,
    "potassium_mg": 232.0,
    "protein_g": 11.3,
    "salt_g": 0.005,
    "sat_fat_g": 0.23,
    "sodium_mg": 2.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.21
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-716",
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
