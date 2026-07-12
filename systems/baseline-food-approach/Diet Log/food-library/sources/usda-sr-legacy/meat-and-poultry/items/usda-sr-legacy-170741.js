/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-bone-and-skin-removed",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170741",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh bone and skin removed"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    }
  ],
  "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Thigh, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.01,
    "energy_kcal": 732.0,
    "fat_g": 9.31,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.87,
    "magnesium_mg": 20.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 213.0,
    "potassium_mg": 230.0,
    "protein_g": 22.8,
    "salt_g": 1.42,
    "sat_fat_g": 2.31,
    "sodium_mg": 568.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170741",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
