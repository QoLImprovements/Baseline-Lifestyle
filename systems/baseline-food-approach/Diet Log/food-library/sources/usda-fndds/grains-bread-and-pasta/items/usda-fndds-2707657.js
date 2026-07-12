/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "1-hamburger-bun",
      "kind": "unit",
      "label": "1 hamburger bun"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-miniature-small-hamburger-bun",
      "kind": "unit",
      "label": "1 miniature/small hamburger bun"
    }
  ],
  "name": "Roll, white, hamburger bun",
  "nutritionPerBasis": {
    "calcium_mg": 211.0,
    "carbs_g": 49.2,
    "energy_kcal": 267.0,
    "fat_g": 3.59,
    "fibre_g": 2.3,
    "folate_ug": 111.0,
    "iron_mg": 3.36,
    "magnesium_mg": 27.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 113.0,
    "potassium_mg": 117.0,
    "protein_g": 9.43,
    "salt_g": 1.125,
    "sat_fat_g": 0.821,
    "sodium_mg": 450.0,
    "sugar_g": 5.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707657",
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
