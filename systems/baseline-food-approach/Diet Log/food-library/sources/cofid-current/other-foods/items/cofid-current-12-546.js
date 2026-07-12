/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analysis and manufacturer's data (Carnation)",
  "id": "cofid-current-12-546",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coffeemate, whitener powder",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 57.3,
    "energy_kcal": 534.0,
    "fat_g": 34.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 350.0,
    "potassium_mg": 900.0,
    "protein_g": 2.1,
    "salt_g": 1.0,
    "sat_fat_g": 26.0,
    "sodium_mg": 400.0,
    "sugar_g": 9.4,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 6.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-546",
  "state": "Unspecified",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
