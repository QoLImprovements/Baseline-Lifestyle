/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "breast-bone-and-skin-removed",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170348",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "breast-bone-and-skin-removed",
      "kind": "unit",
      "label": "breast, bone and skin removed"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "breast-without-skin",
      "kind": "unit",
      "label": "breast, without skin"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "breast-with-skin",
      "kind": "unit",
      "label": "breast, with skin"
    }
  ],
  "name": "KFC, Fried Chicken, EXTRA CRISPY, Breast, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 8.47,
    "energy_kcal": 268.0,
    "fat_g": 16.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.57,
    "magnesium_mg": 24.0,
    "omega3_g": 0.288,
    "phosphorus_mg": 215.0,
    "potassium_mg": 258.0,
    "protein_g": 21.2,
    "salt_g": 1.5175,
    "sat_fat_g": 3.54,
    "sodium_mg": 607.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170348",
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
