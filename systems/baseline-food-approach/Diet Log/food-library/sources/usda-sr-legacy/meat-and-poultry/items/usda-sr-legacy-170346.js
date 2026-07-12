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
  "id": "usda-sr-legacy-170346",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh, with skin"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh, bone and skin removed"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh, without skin"
    }
  ],
  "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Thigh, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 8.46,
    "energy_kcal": 269.0,
    "fat_g": 17.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.88,
    "magnesium_mg": 22.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 230.0,
    "potassium_mg": 237.0,
    "protein_g": 18.9,
    "salt_g": 1.9525,
    "sat_fat_g": 4.12,
    "sodium_mg": 781.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170346",
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
