/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-without-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170745",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick, without skin"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick, bone and skin removed"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick, with skin"
    }
  ],
  "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Drumstick, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 5.39,
    "energy_kcal": 999.0,
    "fat_g": 14.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.97,
    "magnesium_mg": 23.0,
    "omega3_g": 0.189,
    "phosphorus_mg": 211.0,
    "potassium_mg": 250.0,
    "protein_g": 22.3,
    "salt_g": 1.5625,
    "sat_fat_g": 3.24,
    "sodium_mg": 625.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170745",
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
