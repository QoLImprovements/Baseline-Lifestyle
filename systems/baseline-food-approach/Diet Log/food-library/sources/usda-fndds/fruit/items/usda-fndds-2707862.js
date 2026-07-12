/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-piece-slice-any-size",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707862",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cheesecake, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 38.2,
    "energy_kcal": 387.0,
    "fat_g": 23.9,
    "fibre_g": 0.6,
    "folate_ug": 20.0,
    "iron_mg": 0.72,
    "magnesium_mg": 11.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 95.0,
    "potassium_mg": 102.0,
    "protein_g": 4.8,
    "salt_g": 0.63,
    "sat_fat_g": 12.9,
    "sodium_mg": 252.0,
    "sugar_g": 28.8,
    "vitamin_a_ug": 199.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707862",
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
