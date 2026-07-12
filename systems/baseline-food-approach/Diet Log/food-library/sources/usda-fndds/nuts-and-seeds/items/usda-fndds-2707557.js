/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Peanut butter and jelly sandwiches",
  "id": "usda-fndds-2707557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Peanut butter and jelly sandwich, with reduced fat peanut butter, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 49.0,
    "energy_kcal": 339.0,
    "fat_g": 11.6,
    "fibre_g": 2.9,
    "folate_ug": 77.0,
    "iron_mg": 2.38,
    "magnesium_mg": 64.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 167.0,
    "potassium_mg": 263.0,
    "protein_g": 12.5,
    "salt_g": 1.0025,
    "sat_fat_g": 2.09,
    "sodium_mg": 401.0,
    "sugar_g": 14.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707557",
  "state": "Unspecified",
  "subcategory": "Peanut butter and jelly sandwiches",
  "tags": [
    "nuts-and-seeds",
    "peanut-butter-and-jelly-sandwiches",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
