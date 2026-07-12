/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-thigh",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-thigh",
      "kind": "unit",
      "label": "1 thigh"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    }
  ],
  "name": "Chicken thigh, fried, coated, skin / coating eaten, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 13.0,
    "energy_kcal": 294.0,
    "fat_g": 19.7,
    "fibre_g": 0.3,
    "folate_ug": 32.0,
    "iron_mg": 1.26,
    "magnesium_mg": 20.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 179.0,
    "potassium_mg": 203.0,
    "protein_g": 16.3,
    "salt_g": 1.87,
    "sat_fat_g": 4.57,
    "sodium_mg": 748.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706052",
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
