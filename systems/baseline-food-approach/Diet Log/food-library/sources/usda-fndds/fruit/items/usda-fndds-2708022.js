/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cubic-inch",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708022",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cobbler, peach",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 33.0,
    "energy_kcal": 217.0,
    "fat_g": 8.66,
    "fibre_g": 1.7,
    "folate_ug": 22.0,
    "iron_mg": 1.08,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 119.0,
    "protein_g": 2.22,
    "salt_g": 0.455,
    "sat_fat_g": 2.79,
    "sodium_mg": 182.0,
    "sugar_g": 16.6,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708022",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
