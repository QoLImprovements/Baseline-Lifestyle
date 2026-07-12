/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, UK and imported",
  "id": "cofid-current-14-382",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cherries, flesh and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.5,
    "carbs_g": 14.6,
    "energy_kcal": 63.15,
    "fat_g": 0.4,
    "fibre_g": 1.9,
    "folate_ug": 3.2,
    "iron_mg": 0.25,
    "magnesium_mg": 9.39,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.9,
    "potassium_mg": 238.0,
    "protein_g": 1.2,
    "salt_g": 0.0,
    "sat_fat_g": 0.08,
    "sodium_mg": 0.0,
    "sugar_g": 14.6,
    "vitamin_a_ug": 3.083333,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-382",
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
