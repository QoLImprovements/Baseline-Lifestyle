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
  "id": "cofid-current-11-861",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, white, long grain, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 85.1,
    "energy_kcal": 355.0,
    "fat_g": 1.0,
    "fibre_g": 1.1,
    "folate_ug": 14.0,
    "iron_mg": 0.26,
    "magnesium_mg": 25.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 117.0,
    "potassium_mg": 87.0,
    "protein_g": 6.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.25,
    "sodium_mg": 1.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-861",
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
