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
  "id": "cofid-current-11-904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Wheat, bulgur, raw",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 77.8,
    "energy_kcal": 352.0,
    "fat_g": 2.0,
    "fibre_g": 6.7,
    "folate_ug": 27.0,
    "iron_mg": 1.98,
    "magnesium_mg": 85.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 282.0,
    "potassium_mg": 355.0,
    "protein_g": 10.6,
    "salt_g": 0.0125,
    "sat_fat_g": 0.28,
    "sodium_mg": 5.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-904",
  "state": "Raw",
  "subcategory": "AA",
  "tags": [
    "aa",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
