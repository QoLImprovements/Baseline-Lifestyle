/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 brands of continental style frankfurters. 75-90% meat",
  "id": "cofid-current-19-495",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Frankfurter",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 1.1,
    "energy_kcal": 287.0,
    "fat_g": 25.4,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 1.1,
    "magnesium_mg": 11.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 200.0,
    "potassium_mg": 170.0,
    "protein_g": 13.6,
    "salt_g": 1.825,
    "sat_fat_g": 9.2,
    "sodium_mg": 730.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-495",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "mi",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
