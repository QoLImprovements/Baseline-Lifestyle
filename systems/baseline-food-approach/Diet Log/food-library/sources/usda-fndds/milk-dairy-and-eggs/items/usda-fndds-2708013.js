/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-surface-inch",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708013",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "key": "1-individual-pie",
      "kind": "unit",
      "label": "1 individual pie"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    }
  ],
  "name": "Pie, vanilla cream",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 32.3,
    "energy_kcal": 286.0,
    "fat_g": 16.3,
    "fibre_g": 0.7,
    "folate_ug": 16.0,
    "iron_mg": 0.61,
    "magnesium_mg": 7.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 49.0,
    "potassium_mg": 76.0,
    "protein_g": 2.46,
    "salt_g": 0.44,
    "sat_fat_g": 7.41,
    "sodium_mg": 176.0,
    "sugar_g": 19.2,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708013",
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
