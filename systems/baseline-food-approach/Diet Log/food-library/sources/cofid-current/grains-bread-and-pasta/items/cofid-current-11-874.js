/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 7 products",
  "id": "cofid-current-11-874",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice, Thai fragrant, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 84.5,
    "energy_kcal": 352.0,
    "fat_g": 1.1,
    "fibre_g": 0.8,
    "folate_ug": 15.0,
    "iron_mg": 0.17,
    "magnesium_mg": 19.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 89.0,
    "potassium_mg": 76.0,
    "protein_g": 6.4,
    "salt_g": 0.0025,
    "sat_fat_g": 0.27,
    "sodium_mg": 1.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-874",
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
