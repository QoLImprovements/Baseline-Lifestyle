/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-039",
  "id": "cofid-current-14-040",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Avocado, Fuerte, flesh only, weighed with skin and stone",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.3,
    "energy_kcal": 134.0,
    "fat_g": 13.7,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.3,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 310.0,
    "protein_g": 1.5,
    "salt_g": 0.015,
    "sat_fat_g": 2.5,
    "sodium_mg": 6.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-040",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
