/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707883",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "gramsPerUnit": 90.0,
      "key": "1-cupcake-any-size",
      "kind": "unit",
      "label": "1 cupcake, any size"
    }
  ],
  "name": "Cake or cupcake, pumpkin",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 51.6,
    "energy_kcal": 373.0,
    "fat_g": 17.5,
    "fibre_g": 1.1,
    "folate_ug": 23.0,
    "iron_mg": 1.02,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 66.0,
    "protein_g": 2.5,
    "salt_g": 0.7,
    "sat_fat_g": 3.2,
    "sodium_mg": 280.0,
    "sugar_g": 38.4,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.75,
    "vitamin_k_ug": 16.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707883",
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
