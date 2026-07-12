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
  "id": "usda-sr-legacy-170354",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick, with skin"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick, bone and skin removed"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick, without skin"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Drumstick, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 9.84,
    "energy_kcal": 293.0,
    "fat_g": 19.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.06,
    "magnesium_mg": 22.0,
    "omega3_g": 0.105,
    "phosphorus_mg": 171.0,
    "potassium_mg": 261.0,
    "protein_g": 20.4,
    "salt_g": 1.47,
    "sat_fat_g": 6.59,
    "sodium_mg": 588.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170354",
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
