/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-sandwich-1-slice-bread",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707080",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chili hot dog sandwich, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 15.4,
    "energy_kcal": 215.0,
    "fat_g": 12.7,
    "fibre_g": 1.8,
    "folate_ug": 45.0,
    "iron_mg": 1.88,
    "magnesium_mg": 20.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 110.0,
    "potassium_mg": 263.0,
    "protein_g": 9.89,
    "salt_g": 1.3825,
    "sat_fat_g": 4.99,
    "sodium_mg": 553.0,
    "sugar_g": 2.14,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707080",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
