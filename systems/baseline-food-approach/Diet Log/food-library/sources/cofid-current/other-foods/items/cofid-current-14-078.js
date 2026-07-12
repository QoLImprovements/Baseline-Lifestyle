/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-077",
  "id": "cofid-current-14-078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Damsons, flesh and skin, raw, weighed with stones",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 8.6,
    "energy_kcal": 34.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.4,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 260.0,
    "protein_g": 0.5,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 8.6,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-078",
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
