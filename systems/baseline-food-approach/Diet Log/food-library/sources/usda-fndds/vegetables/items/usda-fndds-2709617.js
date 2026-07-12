/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Spinach",
  "id": "usda-fndds-2709617",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Spinach, canned, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 3.4,
    "energy_kcal": 23.0,
    "fat_g": 0.5,
    "fibre_g": 2.4,
    "folate_ug": 93.0,
    "iron_mg": 2.3,
    "magnesium_mg": 76.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 346.0,
    "protein_g": 2.81,
    "salt_g": 0.805,
    "sat_fat_g": 0.081,
    "sodium_mg": 322.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 490.0,
    "vitamin_c_mg": 13.6,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 462.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709617",
  "state": "Canned",
  "subcategory": "Spinach",
  "tags": [
    "canned",
    "spinach",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
