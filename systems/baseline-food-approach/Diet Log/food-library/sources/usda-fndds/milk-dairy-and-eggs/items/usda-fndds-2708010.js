/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708010",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 18.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1600.0,
      "key": "1-pie-any-size",
      "kind": "unit",
      "label": "1 pie, any size"
    }
  ],
  "name": "Pie, pineapple cream",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 31.2,
    "energy_kcal": 274.0,
    "fat_g": 15.6,
    "fibre_g": 0.7,
    "folate_ug": 15.0,
    "iron_mg": 0.6,
    "magnesium_mg": 7.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 47.0,
    "potassium_mg": 79.0,
    "protein_g": 2.36,
    "salt_g": 0.42,
    "sat_fat_g": 7.06,
    "sodium_mg": 168.0,
    "sugar_g": 18.6,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708010",
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
