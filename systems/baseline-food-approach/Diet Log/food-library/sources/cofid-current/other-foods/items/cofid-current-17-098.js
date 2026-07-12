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
  "id": "cofid-current-17-098",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Truffles, mocha, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 63.8,
    "energy_kcal": 488.0,
    "fat_g": 24.9,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 2.0,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 390.0,
    "protein_g": 6.2,
    "salt_g": 0.0925,
    "sat_fat_g": 15.0,
    "sodium_mg": 37.0,
    "sugar_g": 62.9,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-098",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "other-foods",
    "sea",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
