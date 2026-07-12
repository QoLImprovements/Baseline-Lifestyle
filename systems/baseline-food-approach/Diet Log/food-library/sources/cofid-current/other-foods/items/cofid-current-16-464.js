/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-385 using edible conversion factor of 0.86",
  "id": "cofid-current-16-464",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bass, sea, flesh only, raw, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 144.0,
    "fat_g": 8.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.23,
    "magnesium_mg": 26.0,
    "omega3_g": 1.47,
    "phosphorus_mg": 174.0,
    "potassium_mg": 318.0,
    "protein_g": 17.2,
    "salt_g": 0.155,
    "sat_fat_g": 1.86,
    "sodium_mg": 62.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-464",
  "state": "Raw",
  "subcategory": "JA",
  "tags": [
    "ja",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
