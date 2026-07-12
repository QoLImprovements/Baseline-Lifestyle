/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 18.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 1600.0,
      "key": "1-pie-any-size",
      "kind": "unit",
      "label": "1 pie, any size"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    }
  ],
  "name": "Pie, peanut butter cream",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 33.1,
    "energy_kcal": 421.0,
    "fat_g": 30.1,
    "fibre_g": 1.1,
    "folate_ug": 29.0,
    "iron_mg": 0.79,
    "magnesium_mg": 33.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 110.0,
    "potassium_mg": 159.0,
    "protein_g": 5.92,
    "salt_g": 0.59,
    "sat_fat_g": 12.6,
    "sodium_mg": 236.0,
    "sugar_g": 21.7,
    "vitamin_a_ug": 155.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708009",
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
