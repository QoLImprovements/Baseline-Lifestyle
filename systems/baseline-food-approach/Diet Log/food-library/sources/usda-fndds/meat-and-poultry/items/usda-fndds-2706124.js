/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-drumstick-from-hen-approx-11-to-13-lb-bird-yield-aft",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706124",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-small-drumstick-from-hen-approx-11-to-13-lb-bird-yield-aft",
      "kind": "unit",
      "label": "1 small drumstick (from hen, approx 11 to 13 lb bird) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-medium-drumstick-approx-14-to-18-lb-bird-yield-after-cooki",
      "kind": "unit",
      "label": "1 medium drumstick (approx 14 to 18 lb bird) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 285.0,
      "key": "1-large-drumstick-from-tom-approx-19-to-21-lb-bird-yield-aft",
      "kind": "unit",
      "label": "1 large drumstick (from tom, approx 19 to 21 lb bird) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turkey, drumstick, roasted, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 203.0,
    "fat_g": 10.1,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.87,
    "magnesium_mg": 23.0,
    "omega3_g": 0.062,
    "phosphorus_mg": 202.0,
    "potassium_mg": 262.0,
    "protein_g": 26.9,
    "salt_g": 1.105,
    "sat_fat_g": 3.06,
    "sodium_mg": 442.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706124",
  "state": "Roasted",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "meat-and-poultry",
    "roasted",
    "turkey-duck-other-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
