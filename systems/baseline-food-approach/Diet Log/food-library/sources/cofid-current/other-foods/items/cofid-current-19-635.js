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
  "id": "cofid-current-19-635",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Toad in the hole, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 20.2,
    "energy_kcal": 285.0,
    "fat_g": 17.9,
    "fibre_g": 2.4,
    "folate_ug": 10.0,
    "iron_mg": 1.15,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 186.0,
    "potassium_mg": 201.0,
    "protein_g": 12.0,
    "salt_g": 0.835,
    "sat_fat_g": 6.56,
    "sodium_mg": 334.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-635",
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
