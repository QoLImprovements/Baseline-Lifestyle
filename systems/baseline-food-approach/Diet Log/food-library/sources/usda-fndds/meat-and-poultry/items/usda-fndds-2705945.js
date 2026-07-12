/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-piece",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2705945",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
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
      "gramsPerUnit": 60.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Chicken, NS as to part, grilled with sauce, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 7.31,
    "energy_kcal": 211.0,
    "fat_g": 10.7,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 0.76,
    "magnesium_mg": 21.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 164.0,
    "potassium_mg": 260.0,
    "protein_g": 19.9,
    "salt_g": 1.29,
    "sat_fat_g": 2.6,
    "sodium_mg": 516.0,
    "sugar_g": 5.96,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705945",
  "state": "Grilled",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
