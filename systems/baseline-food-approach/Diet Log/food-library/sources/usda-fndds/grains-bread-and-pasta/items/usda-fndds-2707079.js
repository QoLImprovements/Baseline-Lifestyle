/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 269.0,
      "key": "1-footlong",
      "kind": "unit",
      "label": "1 footlong"
    }
  ],
  "name": "Chili hot dog sandwich, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 17.5,
    "energy_kcal": 219.0,
    "fat_g": 12.0,
    "fibre_g": 2.7,
    "folate_ug": 40.0,
    "iron_mg": 1.95,
    "magnesium_mg": 29.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 125.0,
    "potassium_mg": 269.0,
    "protein_g": 10.4,
    "salt_g": 1.3525,
    "sat_fat_g": 4.59,
    "sodium_mg": 541.0,
    "sugar_g": 2.39,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707079",
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
