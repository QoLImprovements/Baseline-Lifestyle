/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707352",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beans, from fast food / restaurant, NS as to type",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 22.6,
    "energy_kcal": 206.0,
    "fat_g": 9.32,
    "fibre_g": 5.7,
    "folate_ug": 69.0,
    "iron_mg": 3.35,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 505.0,
    "protein_g": 8.77,
    "salt_g": 0.885,
    "sat_fat_g": 1.29,
    "sodium_mg": 354.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.56,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707352",
  "state": "Unspecified",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
