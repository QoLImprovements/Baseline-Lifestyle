/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from raw. Water and fat analysed, 2017. 11 samples, mainly UK, trimmed and damaged outer leaves removed. Whole, sliced, halved and roasted for 25-40 minutes",
  "id": "cofid-current-13-626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Leeks, roasted in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 4.5,
    "energy_kcal": 41.0,
    "fat_g": 1.9,
    "fibre_g": 3.1,
    "folate_ug": 17.0,
    "iron_mg": 0.47,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 258.0,
    "protein_g": 1.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.15,
    "sodium_mg": 0.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-626",
  "state": "Roasted",
  "subcategory": "DG",
  "tags": [
    "dg",
    "oils-and-fats",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
