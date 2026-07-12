/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-wing-yield-after-cooking-bone-removed",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706143",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-wing-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 wing (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "1-hen-1-1-4-lb-raw-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 hen (1-1/4 lb, raw) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-breast",
      "kind": "unit",
      "label": "1 breast"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-leg-drumstick-and-thigh-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg (drumstick and thigh) (yield after cooking, bone removed)"
    }
  ],
  "name": "Cornish game hen, cooked, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 257.0,
    "fat_g": 18.1,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.9,
    "magnesium_mg": 18.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 145.0,
    "potassium_mg": 243.0,
    "protein_g": 22.1,
    "salt_g": 0.965,
    "sat_fat_g": 5.01,
    "sodium_mg": 386.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706143",
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
