/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-cooked-diced",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705934",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-2-chicken-yield-after-cooking-bone-and-skin-removed",
      "kind": "unit",
      "label": "1/2 chicken (yield after cooking, bone and skin removed)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Chicken, NS as to part, baked, broiled, or roasted, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 165.0,
    "fat_g": 5.32,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.79,
    "magnesium_mg": 26.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 223.0,
    "potassium_mg": 311.0,
    "protein_g": 27.3,
    "salt_g": 0.8825,
    "sat_fat_g": 1.37,
    "sodium_mg": 353.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705934",
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
