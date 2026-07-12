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
  "id": "usda-fndds-2707509",
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
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    }
  ],
  "name": "Mixed nuts, without peanuts, salted",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 22.0,
    "energy_kcal": 620.0,
    "fat_g": 55.5,
    "fibre_g": 6.9,
    "folate_ug": 59.0,
    "iron_mg": 4.08,
    "magnesium_mg": 227.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 441.0,
    "potassium_mg": 610.0,
    "protein_g": 16.3,
    "salt_g": 0.8,
    "sat_fat_g": 7.17,
    "sodium_mg": 320.0,
    "sugar_g": 4.48,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 9.88,
    "vitamin_k_ug": 15.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707509",
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
