/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, assorted sata pastries",
  "id": "cofid-current-11-230",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastries, Asian",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 43.0,
    "energy_kcal": 538.0,
    "fat_g": 39.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 170.0,
    "protein_g": 6.3,
    "salt_g": 0.475,
    "sat_fat_g": 0.0,
    "sodium_mg": 190.0,
    "sugar_g": 22.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-230",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
