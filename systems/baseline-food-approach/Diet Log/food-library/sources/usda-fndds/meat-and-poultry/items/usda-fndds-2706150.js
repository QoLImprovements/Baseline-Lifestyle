/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-2-pheasant-breast-yield-after-cooking-bone-removed",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706150",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-2-pheasant-breast-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1/2 pheasant breast (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-pheasant-leg-drumstick-and-thigh-yield-after-cooking-bone",
      "kind": "unit",
      "label": "1 pheasant leg (drumstick and thigh) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    }
  ],
  "name": "Pheasant, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 238.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.42,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 241.0,
    "potassium_mg": 270.0,
    "protein_g": 32.3,
    "salt_g": 0.5125,
    "sat_fat_g": 3.89,
    "sodium_mg": 205.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706150",
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
