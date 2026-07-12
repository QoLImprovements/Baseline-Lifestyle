/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Average of green (14-322) and red grapes (14-323)",
  "id": "cofid-current-14-350",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grapes, average",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 16.1,
    "energy_kcal": 65.0,
    "fat_g": 0.2,
    "fibre_g": 1.3,
    "folate_ug": 6.0,
    "iron_mg": 0.23,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 215.0,
    "protein_g": 0.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.06,
    "sodium_mg": 1.0,
    "sugar_g": 16.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-350",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
