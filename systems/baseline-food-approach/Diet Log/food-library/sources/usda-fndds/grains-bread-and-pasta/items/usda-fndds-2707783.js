/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-foot-long-hot-dog-bun",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "1-foot-long-hot-dog-bun",
      "kind": "unit",
      "label": "1 foot long hot dog bun"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-hot-dog-bun",
      "kind": "unit",
      "label": "1 hot dog bun"
    }
  ],
  "name": "Roll, multigrain, hot dog bun",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 44.6,
    "energy_kcal": 263.0,
    "fat_g": 6.0,
    "fibre_g": 3.8,
    "folate_ug": 111.0,
    "iron_mg": 3.95,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 160.0,
    "protein_g": 9.6,
    "salt_g": 1.145,
    "sat_fat_g": 1.39,
    "sodium_mg": 458.0,
    "sugar_g": 6.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707783",
  "state": "Unspecified",
  "subcategory": "Rolls and buns",
  "tags": [
    "grains-bread-and-pasta",
    "rolls-and-buns",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
