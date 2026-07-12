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
  "id": "cofid-current-19-583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Goulash, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 6.5,
    "energy_kcal": 79.0,
    "fat_g": 3.0,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.9,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 292.0,
    "protein_g": 6.9,
    "salt_g": 0.635,
    "sat_fat_g": 0.81,
    "sodium_mg": 254.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-583",
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
