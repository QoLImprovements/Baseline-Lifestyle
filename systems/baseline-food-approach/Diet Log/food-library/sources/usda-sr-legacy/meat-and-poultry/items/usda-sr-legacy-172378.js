/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "leg-with-skin-sum-of-drumstick-thigh-back",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 344.0,
      "key": "leg-with-skin-sum-of-drumstick-thigh-back",
      "kind": "unit",
      "label": "leg, with skin (Sum of drumstick+thigh+back)"
    },
    {
      "gramsPerUnit": 49.0,
      "key": "back-with-skin",
      "kind": "unit",
      "label": "back with skin"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "drumstick-with-skin",
      "kind": "unit",
      "label": "drumstick with skin"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    }
  ],
  "name": "Chicken, broilers or fryers, leg, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.17,
    "energy_kcal": 897.0,
    "fat_g": 16.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.69,
    "magnesium_mg": 19.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 155.0,
    "potassium_mg": 203.0,
    "protein_g": 16.4,
    "salt_g": 0.21,
    "sat_fat_g": 4.37,
    "sodium_mg": 84.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172378",
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
