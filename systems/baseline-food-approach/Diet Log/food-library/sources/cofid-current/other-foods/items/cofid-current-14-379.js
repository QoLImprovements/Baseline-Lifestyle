/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-378",
  "id": "cofid-current-14-379",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mangoes, ripe, flesh only, raw, weighed with skin and stone",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 6.7,
    "energy_kcal": 30.0,
    "fat_g": 0.4,
    "fibre_g": 0.7,
    "folate_ug": 15.0,
    "iron_mg": 0.08,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 95.0,
    "protein_g": 0.4,
    "salt_g": 0.005,
    "sat_fat_g": 0.09,
    "sodium_mg": 2.0,
    "sugar_g": 6.5,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.33
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-379",
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
