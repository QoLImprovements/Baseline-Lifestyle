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
  "id": "usda-fndds-2707488",
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
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1.2,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    }
  ],
  "name": "Almonds, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 259.0,
    "carbs_g": 20.3,
    "energy_kcal": 604.0,
    "fat_g": 53.7,
    "fibre_g": 10.5,
    "folate_ug": 53.0,
    "iron_mg": 3.6,
    "magnesium_mg": 269.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 455.0,
    "potassium_mg": 688.0,
    "protein_g": 20.2,
    "salt_g": 0.4875,
    "sat_fat_g": 4.35,
    "sodium_mg": 195.0,
    "sugar_g": 4.69,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 23.6,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707488",
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
