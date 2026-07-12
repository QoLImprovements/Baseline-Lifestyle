/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-cooked",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705933",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "1-2-chicken-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1/2 chicken (yield after cooking, bone removed)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Chicken, NS as to part, baked, broiled, or roasted, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 203.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.81,
    "magnesium_mg": 23.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 201.0,
    "potassium_mg": 273.0,
    "protein_g": 24.7,
    "salt_g": 0.845,
    "sat_fat_g": 2.91,
    "sodium_mg": 338.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705933",
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
