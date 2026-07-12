/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large-drumstick-from-tom-approx-19-to-21-lb-bird-yield-aft",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706122",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 290.0,
      "key": "1-large-drumstick-from-tom-approx-19-to-21-lb-bird-yield-aft",
      "kind": "unit",
      "label": "1 large drumstick (from tom, approx 19 to 21 lb bird) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-medium-drumstick-approx-14-to-18-lb-bird-yield-after-cooki",
      "kind": "unit",
      "label": "1 medium drumstick (approx 14 to 18 lb bird) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-small-drumstick-from-hen-approx-11-to-13-lb-bird-yield-aft",
      "kind": "unit",
      "label": "1 small drumstick (from hen, approx 11 to 13 lb bird) (yield after cooking, bone removed)"
    }
  ],
  "name": "Turkey, drumstick, cooked, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.0,
    "energy_kcal": 206.0,
    "fat_g": 9.74,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.28,
    "magnesium_mg": 23.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 197.0,
    "potassium_mg": 278.0,
    "protein_g": 27.6,
    "salt_g": 0.9975,
    "sat_fat_g": 3.04,
    "sodium_mg": 399.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706122",
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
