/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 6 products",
  "id": "cofid-current-11-868",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, brown, wholegrain, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 77.0,
    "energy_kcal": 333.0,
    "fat_g": 1.5,
    "fibre_g": 3.0,
    "folate_ug": 22.0,
    "iron_mg": 1.05,
    "magnesium_mg": 116.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 323.0,
    "potassium_mg": 243.0,
    "protein_g": 7.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.28,
    "sodium_mg": 0.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.82
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-868",
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
