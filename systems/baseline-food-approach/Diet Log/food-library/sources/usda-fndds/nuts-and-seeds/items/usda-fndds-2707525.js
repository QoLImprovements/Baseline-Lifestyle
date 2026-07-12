/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-package",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707525",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.5,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    }
  ],
  "name": "Pecans, honey roasted",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 30.2,
    "energy_kcal": 681.0,
    "fat_g": 59.3,
    "fibre_g": 3.9,
    "folate_ug": 15.0,
    "iron_mg": 1.62,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 243.0,
    "protein_g": 6.71,
    "salt_g": 0.9575,
    "sat_fat_g": 5.67,
    "sodium_mg": 383.0,
    "sugar_g": 24.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 2.82,
    "vitamin_k_ug": 12.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707525",
  "state": "Roasted",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
