/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Yogurt-based Greek starter. Recipe",
  "id": "cofid-current-12-547",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tzatziki",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 3.4,
    "energy_kcal": 76.0,
    "fat_g": 5.5,
    "fibre_g": 0.3,
    "folate_ug": 7.0,
    "iron_mg": 0.22,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 168.0,
    "protein_g": 3.4,
    "salt_g": 0.9225,
    "sat_fat_g": 3.58,
    "sodium_mg": 369.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-547",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
