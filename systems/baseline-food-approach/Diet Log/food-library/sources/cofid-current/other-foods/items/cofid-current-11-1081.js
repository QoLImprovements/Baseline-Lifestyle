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
  "id": "cofid-current-11-1081",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gulab jamen/jambu, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 207.0,
    "carbs_g": 49.9,
    "energy_kcal": 273.0,
    "fat_g": 6.6,
    "fibre_g": 0.5,
    "folate_ug": 8.0,
    "iron_mg": 0.37,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 192.0,
    "potassium_mg": 246.0,
    "protein_g": 6.5,
    "salt_g": 0.2875,
    "sat_fat_g": 0.62,
    "sodium_mg": 115.0,
    "sugar_g": 35.6,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 6.81
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1081",
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
