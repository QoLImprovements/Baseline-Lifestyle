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
  "id": "usda-fndds-2706020",
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
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-medium-drumstick",
      "kind": "unit",
      "label": "1 medium drumstick"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-drumstick",
      "kind": "unit",
      "label": "1 small drumstick"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-large-drumstick",
      "kind": "unit",
      "label": "1 large drumstick"
    }
  ],
  "name": "Chicken drumstick, fried, coated, prepared skinless, coating eaten, from raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 5.96,
    "energy_kcal": 212.0,
    "fat_g": 11.6,
    "fibre_g": 0.2,
    "folate_ug": 15.0,
    "iron_mg": 1.34,
    "magnesium_mg": 19.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 166.0,
    "potassium_mg": 211.0,
    "protein_g": 19.7,
    "salt_g": 1.1075,
    "sat_fat_g": 2.14,
    "sodium_mg": 443.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706020",
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
