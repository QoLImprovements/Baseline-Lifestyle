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
  "id": "usda-fndds-2706003",
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
      "gramsPerUnit": 50.0,
      "key": "1-medium-drumstick",
      "kind": "unit",
      "label": "1 medium drumstick"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-large-drumstick",
      "kind": "unit",
      "label": "1 large drumstick"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-small-drumstick",
      "kind": "unit",
      "label": "1 small drumstick"
    }
  ],
  "name": "Chicken drumstick, baked, broiled, or roasted, skin not eaten, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 154.0,
    "fat_g": 5.67,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.13,
    "magnesium_mg": 22.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 199.0,
    "potassium_mg": 254.0,
    "protein_g": 24.1,
    "salt_g": 0.895,
    "sat_fat_g": 1.5,
    "sodium_mg": 358.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706003",
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
