/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707857",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
    }
  ],
  "name": "Cake or cupcake, Black Forest",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 31.3,
    "energy_kcal": 228.0,
    "fat_g": 10.7,
    "fibre_g": 1.7,
    "folate_ug": 21.0,
    "iron_mg": 1.2,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 123.0,
    "protein_g": 3.49,
    "salt_g": 0.535,
    "sat_fat_g": 3.72,
    "sodium_mg": 214.0,
    "sugar_g": 18.3,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707857",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
