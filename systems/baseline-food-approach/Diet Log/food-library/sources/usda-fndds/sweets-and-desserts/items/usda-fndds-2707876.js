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
  "id": "usda-fndds-2707876",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cake or cupcake, gingerbread",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 45.3,
    "energy_kcal": 276.0,
    "fat_g": 9.16,
    "fibre_g": 1.0,
    "folate_ug": 26.0,
    "iron_mg": 2.98,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 217.0,
    "protein_g": 3.64,
    "salt_g": 1.0275,
    "sat_fat_g": 2.35,
    "sodium_mg": 411.0,
    "sugar_g": 28.3,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707876",
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
