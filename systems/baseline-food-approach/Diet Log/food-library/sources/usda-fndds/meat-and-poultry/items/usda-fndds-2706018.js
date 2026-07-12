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
  "id": "usda-fndds-2706018",
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
      "gramsPerUnit": 65.0,
      "key": "1-small-drumstick",
      "kind": "unit",
      "label": "1 small drumstick"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-large-drumstick",
      "kind": "unit",
      "label": "1 large drumstick"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-medium-drumstick",
      "kind": "unit",
      "label": "1 medium drumstick"
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
    }
  ],
  "name": "Chicken drumstick, fried, coated, skin / coating eaten, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 5.98,
    "energy_kcal": 241.0,
    "fat_g": 15.1,
    "fibre_g": 0.2,
    "folate_ug": 15.0,
    "iron_mg": 1.32,
    "magnesium_mg": 20.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 163.0,
    "potassium_mg": 204.0,
    "protein_g": 19.1,
    "salt_g": 0.9075,
    "sat_fat_g": 3.1,
    "sodium_mg": 363.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706018",
  "state": "Fried",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
