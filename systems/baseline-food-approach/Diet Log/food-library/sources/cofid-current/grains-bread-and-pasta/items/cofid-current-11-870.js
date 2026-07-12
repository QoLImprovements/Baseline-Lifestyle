/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 5 products, including Italian and American",
  "id": "cofid-current-11-870",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, brown, easy cook, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 82.1,
    "energy_kcal": 366.0,
    "fat_g": 3.1,
    "fibre_g": 3.5,
    "folate_ug": 16.0,
    "iron_mg": 1.02,
    "magnesium_mg": 115.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 328.0,
    "potassium_mg": 232.0,
    "protein_g": 7.5,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-870",
  "state": "Raw",
  "subcategory": "AC",
  "tags": [
    "ac",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
