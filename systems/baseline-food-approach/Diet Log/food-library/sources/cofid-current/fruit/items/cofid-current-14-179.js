/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-178",
  "id": "cofid-current-14-179",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Passion fruit, flesh and pips, weighed with skin",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 3.5,
    "energy_kcal": 22.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.8,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 120.0,
    "protein_g": 1.7,
    "salt_g": 0.03,
    "sat_fat_g": 0.0,
    "sodium_mg": 12.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-179",
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
