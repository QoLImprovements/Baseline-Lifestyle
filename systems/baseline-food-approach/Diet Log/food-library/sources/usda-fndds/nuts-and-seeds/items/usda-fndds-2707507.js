/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-cup",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707507",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Mixed nuts, with peanuts, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 21.0,
    "energy_kcal": 612.0,
    "fat_g": 54.0,
    "fibre_g": 7.4,
    "folate_ug": 76.0,
    "iron_mg": 2.77,
    "magnesium_mg": 197.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 390.0,
    "potassium_mg": 603.0,
    "protein_g": 19.7,
    "salt_g": 0.4,
    "sat_fat_g": 7.62,
    "sodium_mg": 160.0,
    "sugar_g": 4.55,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 7.79,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707507",
  "state": "Unspecified",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
