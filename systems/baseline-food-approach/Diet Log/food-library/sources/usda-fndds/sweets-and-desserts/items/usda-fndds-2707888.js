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
  "id": "usda-fndds-2707888",
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
    }
  ],
  "name": "Cake, torte",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 33.9,
    "energy_kcal": 241.0,
    "fat_g": 10.4,
    "fibre_g": 0.9,
    "folate_ug": 25.0,
    "iron_mg": 1.01,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 85.0,
    "protein_g": 3.28,
    "salt_g": 0.6825,
    "sat_fat_g": 2.99,
    "sodium_mg": 273.0,
    "sugar_g": 19.1,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 14.3,
    "vitamin_e_mg": 1.69,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707888",
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
