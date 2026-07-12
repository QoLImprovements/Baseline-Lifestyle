/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 8 products, wheat",
  "id": "cofid-current-11-901",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Couscous, plain, raw",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 79.2,
    "energy_kcal": 364.0,
    "fat_g": 2.1,
    "fibre_g": 3.7,
    "folate_ug": 28.0,
    "iron_mg": 2.0,
    "magnesium_mg": 59.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 238.0,
    "potassium_mg": 287.0,
    "protein_g": 12.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.3,
    "sodium_mg": 4.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-901",
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
