/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-318 using edible factor of 0.87",
  "id": "cofid-current-14-347",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bananas, raw, flesh only, weighed with skin",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 12.8,
    "energy_kcal": 51.0,
    "fat_g": 0.0,
    "fibre_g": 0.9,
    "folate_ug": 9.0,
    "iron_mg": 0.17,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 208.0,
    "protein_g": 0.8,
    "salt_g": 0.0,
    "sat_fat_g": 0.03,
    "sodium_mg": 0.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.04
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-347",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
