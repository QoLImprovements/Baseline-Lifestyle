/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-173645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 297.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-capon",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to cook capon)"
    },
    {
      "gramsPerUnit": 964.0,
      "key": "0-5-capon-bone-removed",
      "kind": "unit",
      "label": "0.5 capon, bone removed"
    }
  ],
  "name": "Chicken, capons, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 979.0,
    "fat_g": 17.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.09,
    "magnesium_mg": 21.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 183.0,
    "potassium_mg": 217.0,
    "protein_g": 18.8,
    "salt_g": 0.1125,
    "sat_fat_g": 4.95,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173645",
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
