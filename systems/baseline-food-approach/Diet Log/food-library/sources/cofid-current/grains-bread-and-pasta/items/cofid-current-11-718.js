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
  "id": "cofid-current-11-718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, wholewheat, spaghetti, dried, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 68.3,
    "energy_kcal": 329.0,
    "fat_g": 2.5,
    "fibre_g": 11.7,
    "folate_ug": 29.0,
    "iron_mg": 3.25,
    "magnesium_mg": 103.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 333.0,
    "potassium_mg": 426.0,
    "protein_g": 12.6,
    "salt_g": 0.0075,
    "sat_fat_g": 0.4,
    "sodium_mg": 3.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-718",
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
