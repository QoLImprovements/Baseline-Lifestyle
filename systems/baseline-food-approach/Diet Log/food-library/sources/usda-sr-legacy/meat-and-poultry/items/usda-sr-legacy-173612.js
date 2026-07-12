/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick-without-skin",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173612",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "drumstick-without-skin",
      "kind": "unit",
      "label": "drumstick without skin"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "drumstick-with-skin-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "drumstick with skin (yield from 1 lb ready-to-cook chicken)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broilers or fryers, drumstick, meat and skin, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 797.0,
    "fat_g": 10.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.11,
    "magnesium_mg": 22.0,
    "omega3_g": 0.101,
    "phosphorus_mg": 195.0,
    "potassium_mg": 247.0,
    "protein_g": 23.4,
    "salt_g": 0.3075,
    "sat_fat_g": 2.74,
    "sodium_mg": 123.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173612",
  "state": "Roasted",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
