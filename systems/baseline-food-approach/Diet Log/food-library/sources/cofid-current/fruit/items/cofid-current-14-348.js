/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-326 using edible conversion factor of 0.78",
  "id": "cofid-current-14-348",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Citrus fruit, soft/easy peelers, flesh only, weighed with peel and pips",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 7.5,
    "energy_kcal": 32.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 15.0,
    "iron_mg": 0.07,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 100.0,
    "protein_g": 0.5,
    "salt_g": 0.0025,
    "sat_fat_g": 0.03,
    "sodium_mg": 1.0,
    "sugar_g": 7.5,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 33.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-348",
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
