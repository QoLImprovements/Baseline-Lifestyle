/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "4 samples, 2 products, corn based",
  "id": "cofid-current-11-905",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Polenta, hydrated, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 15.2,
    "energy_kcal": 68.0,
    "fat_g": 0.4,
    "fibre_g": 1.7,
    "folate_ug": 5.0,
    "iron_mg": 0.13,
    "magnesium_mg": 7.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 20.0,
    "potassium_mg": 27.0,
    "protein_g": 1.9,
    "salt_g": 1.3525,
    "sat_fat_g": 0.05,
    "sodium_mg": 541.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-905",
  "state": "Raw",
  "subcategory": "AT",
  "tags": [
    "at",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
