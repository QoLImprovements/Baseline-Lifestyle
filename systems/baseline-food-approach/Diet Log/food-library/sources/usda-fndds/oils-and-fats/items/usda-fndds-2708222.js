/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-cup-popped",
  "description": "Popcorn",
  "id": "usda-fndds-2708222",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cup-popped",
      "kind": "unit",
      "label": "1 cup, popped"
    },
    {
      "gramsPerUnit": 193.0,
      "key": "1-cup-unpopped-yields",
      "kind": "unit",
      "label": "1 cup, unpopped, yields"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-oz-unpopped-yields",
      "kind": "unit",
      "label": "1 oz, unpopped, yields"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    }
  ],
  "name": "Popcorn, popped in oil, with added butter",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 49.1,
    "energy_kcal": 525.0,
    "fat_g": 35.2,
    "fibre_g": 8.4,
    "folate_ug": 15.0,
    "iron_mg": 2.35,
    "magnesium_mg": 92.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 214.0,
    "potassium_mg": 194.0,
    "protein_g": 7.69,
    "salt_g": 0.5575,
    "sat_fat_g": 9.21,
    "sodium_mg": 223.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 126.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 3.15,
    "vitamin_k_ug": 10.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708222",
  "state": "Unspecified",
  "subcategory": "Popcorn",
  "tags": [
    "oils-and-fats",
    "popcorn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
