/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-cup",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707881",
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
      "gramsPerUnit": 175.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cupcake-any-size",
      "kind": "unit",
      "label": "1 cupcake, any size"
    }
  ],
  "name": "Cake or cupcake, peanut butter",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 47.5,
    "energy_kcal": 382.0,
    "fat_g": 19.8,
    "fibre_g": 2.0,
    "folate_ug": 35.0,
    "iron_mg": 1.4,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 158.0,
    "protein_g": 6.12,
    "salt_g": 0.83,
    "sat_fat_g": 4.08,
    "sodium_mg": 332.0,
    "sugar_g": 32.3,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.13,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707881",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
