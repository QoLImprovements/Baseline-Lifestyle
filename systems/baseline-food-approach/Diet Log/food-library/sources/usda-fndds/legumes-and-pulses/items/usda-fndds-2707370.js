/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707370",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "1-oz-dry-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz dry, yield after cooking"
    }
  ],
  "name": "Pink beans, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 25.9,
    "energy_kcal": 197.0,
    "fat_g": 6.96,
    "fibre_g": 4.9,
    "folate_ug": 148.0,
    "iron_mg": 2.15,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 472.0,
    "protein_g": 8.42,
    "salt_g": 0.545,
    "sat_fat_g": 0.987,
    "sodium_mg": 218.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.15,
    "vitamin_k_ug": 10.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707370",
  "state": "Cooked",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "cooked",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
