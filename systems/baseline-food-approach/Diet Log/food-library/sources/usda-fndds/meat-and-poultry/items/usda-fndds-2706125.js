/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-diced-cooked",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "1-medium-thigh-approx-14-to-18-lb-bird-yield-after-cooking-b",
      "kind": "unit",
      "label": "1 medium thigh (approx 14 to 18 lb bird) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "1-large-thigh-from-tom-approx-19-to-21-lb-bird-yield-after-c",
      "kind": "unit",
      "label": "1 large thigh (from tom, approx 19 to 21 lb bird) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-small-thigh-from-hen-approx-11-to-13-lb-bird-yield-after-c",
      "kind": "unit",
      "label": "1 small thigh (from hen, approx 11 to 13 lb bird) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-boneless-cooked",
      "kind": "unit",
      "label": "1 oz, boneless, cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turkey, thigh, cooked, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.27,
    "energy_kcal": 182.0,
    "fat_g": 9.26,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.34,
    "magnesium_mg": 22.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 194.0,
    "potassium_mg": 256.0,
    "protein_g": 24.4,
    "salt_g": 1.1425,
    "sat_fat_g": 2.83,
    "sodium_mg": 457.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706125",
  "state": "Cooked",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "turkey-duck-other-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
