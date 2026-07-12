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
  "id": "usda-fndds-2706129",
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
      "gramsPerUnit": 175.0,
      "key": "1-medium-wing-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 medium wing (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-large-wing-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 large wing (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-small-wing-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 small wing (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    }
  ],
  "name": "Turkey, wing, cooked, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 202.0,
    "fat_g": 9.97,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.16,
    "magnesium_mg": 26.0,
    "omega3_g": 0.038,
    "phosphorus_mg": 215.0,
    "potassium_mg": 258.0,
    "protein_g": 26.9,
    "salt_g": 1.105,
    "sat_fat_g": 2.74,
    "sodium_mg": 442.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706129",
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
