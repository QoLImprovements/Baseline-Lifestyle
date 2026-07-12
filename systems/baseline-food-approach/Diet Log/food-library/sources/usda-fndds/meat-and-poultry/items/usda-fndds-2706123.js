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
  "id": "usda-fndds-2706123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-small-drumstick-from-hen-approx-11-to-13-lb-bird-yield-aft",
      "kind": "unit",
      "label": "1 small drumstick (from hen, approx 11 to 13 lb bird) (yield after cooking, bone and skin removed)"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-large-drumstick-from-tom-approx-19-to-21-lb-bird-yield-aft",
      "kind": "unit",
      "label": "1 large drumstick (from tom, approx 19 to 21 lb bird) (yield after cooking, bone and skin removed)"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-medium-drumstick-approx-14-to-18-lb-bird-yield-after-cooki",
      "kind": "unit",
      "label": "1 medium drumstick (approx 14 to 18 lb bird) (yield after cooking, bone and skin removed)"
    }
  ],
  "name": "Turkey, drumstick, roasted, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 144.0,
    "fat_g": 3.38,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.82,
    "magnesium_mg": 29.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 221.0,
    "potassium_mg": 240.0,
    "protein_g": 28.5,
    "salt_g": 1.1375,
    "sat_fat_g": 0.997,
    "sodium_mg": 455.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706123",
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
