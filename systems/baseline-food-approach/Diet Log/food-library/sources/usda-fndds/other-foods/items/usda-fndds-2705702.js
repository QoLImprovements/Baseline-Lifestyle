/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cubic-inch",
  "description": "Cakes and pies",
  "id": "usda-fndds-2705702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Tiramisu",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 29.4,
    "energy_kcal": 353.0,
    "fat_g": 23.9,
    "fibre_g": 0.6,
    "folate_ug": 20.0,
    "iron_mg": 1.12,
    "magnesium_mg": 16.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 109.0,
    "potassium_mg": 150.0,
    "protein_g": 5.65,
    "salt_g": 0.4325,
    "sat_fat_g": 13.3,
    "sodium_mg": 173.0,
    "sugar_g": 18.7,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705702",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
