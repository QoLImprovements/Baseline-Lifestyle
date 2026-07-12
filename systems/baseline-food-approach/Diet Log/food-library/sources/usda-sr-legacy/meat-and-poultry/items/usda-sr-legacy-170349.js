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
  "id": "usda-sr-legacy-170349",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick, with skin"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick, without skin"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick, bone and skin removed"
    }
  ],
  "name": "KFC, Fried Chicken, EXTRA CRISPY, Drumstick, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 7.96,
    "energy_kcal": 1150.0,
    "fat_g": 17.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.91,
    "magnesium_mg": 21.0,
    "omega3_g": 0.291,
    "phosphorus_mg": 198.0,
    "potassium_mg": 237.0,
    "protein_g": 20.6,
    "salt_g": 1.58,
    "sat_fat_g": 3.89,
    "sodium_mg": 632.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170349",
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
