/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-sandwich",
  "description": "Peanut butter and jelly sandwiches",
  "id": "usda-fndds-2707552",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    }
  ],
  "name": "Peanut butter sandwich, with reduced fat peanut butter, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 44.5,
    "energy_kcal": 355.0,
    "fat_g": 14.2,
    "fibre_g": 3.3,
    "folate_ug": 93.0,
    "iron_mg": 2.85,
    "magnesium_mg": 77.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 202.0,
    "potassium_mg": 309.0,
    "protein_g": 15.2,
    "salt_g": 1.2025,
    "sat_fat_g": 2.54,
    "sodium_mg": 481.0,
    "sugar_g": 6.71,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.29,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707552",
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
