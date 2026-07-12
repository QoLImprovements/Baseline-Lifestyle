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
  "id": "usda-fndds-2707508",
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
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mixed nuts, with peanuts, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 21.1,
    "energy_kcal": 615.0,
    "fat_g": 54.2,
    "fibre_g": 7.5,
    "folate_ug": 76.0,
    "iron_mg": 2.78,
    "magnesium_mg": 198.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 392.0,
    "potassium_mg": 606.0,
    "protein_g": 19.8,
    "salt_g": 0.015,
    "sat_fat_g": 7.65,
    "sodium_mg": 6.0,
    "sugar_g": 4.57,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 7.82,
    "vitamin_k_ug": 10.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707508",
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
