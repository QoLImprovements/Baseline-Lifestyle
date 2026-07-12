/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-354 using edible conversion factor of 0.66; no pips",
  "id": "cofid-current-14-356",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Melon, flesh only, average, weighed with skin",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 3.7,
    "energy_kcal": 16.0,
    "fat_g": 0.1,
    "fibre_g": 0.9,
    "folate_ug": 5.0,
    "iron_mg": 0.15,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 119.0,
    "protein_g": 0.3,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-356",
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
