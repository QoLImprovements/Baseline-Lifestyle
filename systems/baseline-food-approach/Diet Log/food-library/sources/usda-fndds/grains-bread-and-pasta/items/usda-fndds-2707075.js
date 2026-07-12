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
  "id": "usda-fndds-2707075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hot dog sandwich, reduced fat, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 19.0,
    "energy_kcal": 233.0,
    "fat_g": 11.6,
    "fibre_g": 1.9,
    "folate_ug": 27.0,
    "iron_mg": 1.85,
    "magnesium_mg": 26.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 133.0,
    "potassium_mg": 198.0,
    "protein_g": 12.9,
    "salt_g": 1.385,
    "sat_fat_g": 4.51,
    "sodium_mg": 554.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707075",
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
