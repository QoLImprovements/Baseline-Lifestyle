/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-with-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh, with skin"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh, bone and skin removed"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh, without skin"
    }
  ],
  "name": "KFC, Fried Chicken, EXTRA CRISPY, Thigh, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 10.3,
    "energy_kcal": 309.0,
    "fat_g": 22.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.83,
    "magnesium_mg": 20.0,
    "omega3_g": 0.352,
    "phosphorus_mg": 189.0,
    "potassium_mg": 225.0,
    "protein_g": 17.2,
    "salt_g": 1.705,
    "sat_fat_g": 4.92,
    "sodium_mg": 682.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170746",
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
