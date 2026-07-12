/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Calculated from 13-505 and 17-033",
  "id": "cofid-current-13-546",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mushrooms, white, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.4,
    "energy_kcal": 106.0,
    "fat_g": 11.0,
    "fibre_g": 1.0,
    "folate_ug": 26.0,
    "iron_mg": 0.31,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 542.0,
    "protein_g": 1.4,
    "salt_g": 0.015,
    "sat_fat_g": 1.6,
    "sodium_mg": 6.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.88,
    "vitamin_k_ug": 0.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-546",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
