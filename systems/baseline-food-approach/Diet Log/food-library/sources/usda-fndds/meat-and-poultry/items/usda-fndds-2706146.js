/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-breast",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-breast",
      "kind": "unit",
      "label": "1 breast"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-leg-drumstick-and-thigh-yield-after-cooking-bone-and-skin",
      "kind": "unit",
      "label": "1 leg (drumstick and thigh) (yield after cooking, bone and skin removed)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-wing-yield-after-cooking-bone-and-skin-removed",
      "kind": "unit",
      "label": "1 wing (yield after cooking, bone and skin removed)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-hen-1-1-4-lb-raw-yield-after-cooking-bone-and-skin-removed",
      "kind": "unit",
      "label": "1 hen (1-1/4 lb, raw) (yield after cooking, bone and skin removed)"
    }
  ],
  "name": "Cornish game hen, roasted, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 133.0,
    "fat_g": 3.84,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.76,
    "magnesium_mg": 19.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 148.0,
    "potassium_mg": 248.0,
    "protein_g": 23.1,
    "salt_g": 0.9625,
    "sat_fat_g": 0.982,
    "sodium_mg": 385.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706146",
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
