/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "7 samples, 7 products",
  "id": "cofid-current-11-878",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, white, Italian Arborio risotto, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 85.2,
    "energy_kcal": 354.0,
    "fat_g": 1.0,
    "fibre_g": 1.4,
    "folate_ug": 13.0,
    "iron_mg": 0.21,
    "magnesium_mg": 30.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 125.0,
    "potassium_mg": 86.0,
    "protein_g": 6.4,
    "salt_g": 0.0025,
    "sat_fat_g": 0.21,
    "sodium_mg": 1.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-878",
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
