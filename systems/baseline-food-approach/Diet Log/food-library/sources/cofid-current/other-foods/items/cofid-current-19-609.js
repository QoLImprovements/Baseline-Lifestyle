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
  "id": "cofid-current-19-609",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Moussaka, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 4.5,
    "energy_kcal": 128.0,
    "fat_g": 8.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.9,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 266.0,
    "protein_g": 8.5,
    "salt_g": 0.18,
    "sat_fat_g": 3.39,
    "sodium_mg": 72.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-609",
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
