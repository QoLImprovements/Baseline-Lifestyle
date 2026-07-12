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
  "id": "cofid-current-11-1132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Welsh cheesecakes, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 49.2,
    "energy_kcal": 420.0,
    "fat_g": 23.8,
    "fibre_g": 1.9,
    "folate_ug": 5.0,
    "iron_mg": 0.93,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 90.0,
    "protein_g": 5.3,
    "salt_g": 0.7825,
    "sat_fat_g": 8.39,
    "sodium_mg": 313.0,
    "sugar_g": 22.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1132",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
