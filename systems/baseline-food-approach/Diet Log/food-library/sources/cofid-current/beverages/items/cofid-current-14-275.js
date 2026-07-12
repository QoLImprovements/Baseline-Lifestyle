/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "50 samples; cartons, canned, bottled and frozen",
  "id": "cofid-current-14-275",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grapefruit juice, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 8.3,
    "energy_kcal": 33.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.2,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 100.0,
    "protein_g": 0.4,
    "salt_g": 0.0175,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.0,
    "sugar_g": 8.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 31.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-275",
  "state": "Unspecified",
  "subcategory": "PE",
  "tags": [
    "beverages",
    "pe",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
