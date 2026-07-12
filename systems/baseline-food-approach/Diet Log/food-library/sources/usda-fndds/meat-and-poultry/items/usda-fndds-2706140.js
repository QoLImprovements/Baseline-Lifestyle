/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-leg-drumstick-and-thigh-yield-after-cooking-bone-and-skin",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
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
      "gramsPerUnit": 95.0,
      "key": "1-breast",
      "kind": "unit",
      "label": "1 breast"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-2-duck-yield-after-cooking-bone-and-skin-removed",
      "kind": "unit",
      "label": "1/2 duck (yield after cooking, bone and skin removed)"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-wing-yield-after-cooking-bone-and-skin-removed",
      "kind": "unit",
      "label": "1 wing (yield after cooking, bone and skin removed)"
    }
  ],
  "name": "Duck, roasted, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 200.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.69,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 202.0,
    "potassium_mg": 251.0,
    "protein_g": 23.4,
    "salt_g": 0.5675,
    "sat_fat_g": 3.93,
    "sodium_mg": 227.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706140",
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
