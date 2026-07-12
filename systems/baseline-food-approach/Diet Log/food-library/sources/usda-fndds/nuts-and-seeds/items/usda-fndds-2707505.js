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
  "id": "usda-fndds-2707505",
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
    }
  ],
  "name": "Mixed nuts, unroasted",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 22.9,
    "energy_kcal": 616.0,
    "fat_g": 54.6,
    "fibre_g": 7.2,
    "folate_ug": 62.0,
    "iron_mg": 4.24,
    "magnesium_mg": 236.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 458.0,
    "potassium_mg": 634.0,
    "protein_g": 17.0,
    "salt_g": 0.0175,
    "sat_fat_g": 7.04,
    "sodium_mg": 7.0,
    "sugar_g": 4.66,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 9.68,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707505",
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
