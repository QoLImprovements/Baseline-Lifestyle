/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706126",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-boneless-cooked-skinless",
      "kind": "unit",
      "label": "1 oz, boneless, cooked, skinless"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-small-thigh-from-hen-approx-11-to-13-lb-bird-yield-after-c",
      "kind": "unit",
      "label": "1 small thigh (from hen, approx 11 to 13 lb bird) (yield after cooking, bone and skin removed)"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 345.0,
      "key": "1-large-thigh-from-tom-approx-19-to-21-lb-bird-yield-after-c",
      "kind": "unit",
      "label": "1 large thigh (from tom, approx 19 to 21 lb bird) (yield after cooking, bone and skin removed)"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "1-medium-thigh-approx-14-to-18-lb-bird-yield-after-cooking-b",
      "kind": "unit",
      "label": "1 medium thigh (approx 14 to 18 lb bird) (yield after cooking, bone and skin removed)"
    }
  ],
  "name": "Turkey, thigh, cooked, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 161.0,
    "fat_g": 5.98,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.3,
    "magnesium_mg": 26.0,
    "omega3_g": 0.025,
    "phosphorus_mg": 209.0,
    "potassium_mg": 225.0,
    "protein_g": 26.9,
    "salt_g": 1.145,
    "sat_fat_g": 1.79,
    "sodium_mg": 458.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706126",
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
