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
  "id": "usda-fndds-2706137",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
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
      "gramsPerUnit": 90.0,
      "key": "1-leg-drumstick-and-thigh-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 leg (drumstick and thigh) (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-wing-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 wing (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 380.0,
      "key": "1-2-duck-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1/2 duck (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    }
  ],
  "name": "Duck, cooked, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 336.0,
    "fat_g": 28.2,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.69,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 155.0,
    "potassium_mg": 203.0,
    "protein_g": 18.9,
    "salt_g": 0.5525,
    "sat_fat_g": 9.63,
    "sodium_mg": 221.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706137",
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
