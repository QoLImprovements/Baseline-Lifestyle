/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-piece-slice-any-size",
  "description": "Cakes and pies",
  "id": "usda-fndds-2707858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cake, Boston cream pie",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 42.9,
    "energy_kcal": 252.0,
    "fat_g": 8.5,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 0.38,
    "magnesium_mg": 6.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 49.0,
    "potassium_mg": 39.0,
    "protein_g": 2.4,
    "salt_g": 0.635,
    "sat_fat_g": 2.44,
    "sodium_mg": 254.0,
    "sugar_g": 36.1,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707858",
  "state": "Unspecified",
  "subcategory": "Cakes and pies",
  "tags": [
    "cakes-and-pies",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
