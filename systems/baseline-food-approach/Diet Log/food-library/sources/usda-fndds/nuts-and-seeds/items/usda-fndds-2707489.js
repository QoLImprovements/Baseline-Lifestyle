/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707489",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 1.2,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    }
  ],
  "name": "Almonds, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 260.0,
    "carbs_g": 20.4,
    "energy_kcal": 607.0,
    "fat_g": 54.0,
    "fibre_g": 10.6,
    "folate_ug": 53.0,
    "iron_mg": 3.62,
    "magnesium_mg": 271.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 457.0,
    "potassium_mg": 692.0,
    "protein_g": 20.3,
    "salt_g": 0.0075,
    "sat_fat_g": 4.37,
    "sodium_mg": 3.0,
    "sugar_g": 4.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 23.8,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707489",
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
