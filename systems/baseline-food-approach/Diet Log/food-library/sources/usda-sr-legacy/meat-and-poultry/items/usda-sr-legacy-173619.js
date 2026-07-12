/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-bone-and-skin-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173619",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "drumstick-bone-and-skin-removed",
      "kind": "unit",
      "label": "drumstick bone and skin removed"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh bone and skin removed"
    },
    {
      "gramsPerUnit": 265.0,
      "key": "leg-bone-and-skin-removed-sum-of-drumstick-thigh-back-meat-o",
      "kind": "unit",
      "label": "leg, bone and skin removed (Sum of drumstick+thigh+back meat only)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "back-bone-and-skin-removed",
      "kind": "unit",
      "label": "back bone and skin removed"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, leg, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 501.0,
    "fat_g": 4.22,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.78,
    "magnesium_mg": 23.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 180.0,
    "potassium_mg": 238.0,
    "protein_g": 19.2,
    "salt_g": 0.24,
    "sat_fat_g": 1.05,
    "sodium_mg": 96.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173619",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
