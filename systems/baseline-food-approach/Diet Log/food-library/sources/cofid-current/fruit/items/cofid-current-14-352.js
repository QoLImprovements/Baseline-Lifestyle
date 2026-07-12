/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-339 using edible portion of 0.59",
  "id": "cofid-current-14-352",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Melon, Canteloupe-type, flesh only, weighed whole",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.5,
    "energy_kcal": 12.0,
    "fat_g": 0.1,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.2,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 120.0,
    "protein_g": 0.4,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-352",
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
