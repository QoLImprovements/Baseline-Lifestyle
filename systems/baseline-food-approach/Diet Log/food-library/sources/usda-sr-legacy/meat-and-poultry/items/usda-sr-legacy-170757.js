/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-with-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170757",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick, with skin"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick, bone and skin removed"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick, without skin"
    }
  ],
  "name": "Fast Foods, Fried Chicken, Drumstick, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 7.59,
    "energy_kcal": 267.0,
    "fat_g": 16.9,
    "fibre_g": 0.5,
    "folate_ug": 21.0,
    "iron_mg": 0.99,
    "magnesium_mg": 22.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 188.0,
    "potassium_mg": 253.0,
    "protein_g": 21.1,
    "salt_g": 1.4775,
    "sat_fat_g": 4.46,
    "sodium_mg": 591.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170757",
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
