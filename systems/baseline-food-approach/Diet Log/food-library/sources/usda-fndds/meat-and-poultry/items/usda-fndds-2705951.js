/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
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
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 465.0,
      "key": "1-2-chicken-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1/2 chicken (yield after cooking, bone removed)"
    }
  ],
  "name": "Chicken, NS as to part, baked, coated, skin / coating eaten",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 7.14,
    "energy_kcal": 251.0,
    "fat_g": 15.0,
    "fibre_g": 0.2,
    "folate_ug": 22.0,
    "iron_mg": 0.86,
    "magnesium_mg": 24.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 216.0,
    "potassium_mg": 264.0,
    "protein_g": 21.8,
    "salt_g": 1.6775,
    "sat_fat_g": 4.0,
    "sodium_mg": 671.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705951",
  "state": "Baked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "baked",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
