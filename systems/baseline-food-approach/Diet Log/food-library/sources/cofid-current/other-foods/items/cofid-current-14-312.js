/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-299",
  "id": "cofid-current-14-312",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peaches, flesh and skin, raw, weighed with stone",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.8,
    "energy_kcal": 30.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.4,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 140.0,
    "protein_g": 0.9,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 6.8,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 28.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 5.22
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-312",
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
