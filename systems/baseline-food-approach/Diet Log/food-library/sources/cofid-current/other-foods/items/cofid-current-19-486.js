/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coq au vin, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 3.3,
    "energy_kcal": 188.0,
    "fat_g": 11.0,
    "fibre_g": 0.2,
    "folate_ug": 5.0,
    "iron_mg": 1.02,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 286.0,
    "protein_g": 11.0,
    "salt_g": 0.385,
    "sat_fat_g": 4.19,
    "sodium_mg": 154.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-486",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
