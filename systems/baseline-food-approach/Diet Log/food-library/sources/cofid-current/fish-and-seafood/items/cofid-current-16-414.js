/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, flesh only",
  "id": "cofid-current-16-414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mackerel, flesh only, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 0.0,
    "energy_kcal": 301.0,
    "fat_g": 24.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.13,
    "magnesium_mg": 38.0,
    "omega3_g": 5.57,
    "phosphorus_mg": 237.0,
    "potassium_mg": 319.0,
    "protein_g": 21.1,
    "salt_g": 1.865,
    "sat_fat_g": 5.04,
    "sodium_mg": 746.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-414",
  "state": "Unspecified",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
