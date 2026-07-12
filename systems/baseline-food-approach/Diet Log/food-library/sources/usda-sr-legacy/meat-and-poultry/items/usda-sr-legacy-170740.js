/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-bone-and-skin-removed",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170740",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick, bone and skin removed"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick, without skin"
    }
  ],
  "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Drumstick, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.11,
    "energy_kcal": 175.0,
    "fat_g": 7.66,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.04,
    "magnesium_mg": 23.0,
    "omega3_g": 0.088,
    "phosphorus_mg": 223.0,
    "potassium_mg": 273.0,
    "protein_g": 26.3,
    "salt_g": 1.31,
    "sat_fat_g": 1.84,
    "sodium_mg": 524.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170740",
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
