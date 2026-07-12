/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Flavored milk, lowfat",
  "id": "usda-fndds-2705500",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-individual-school-container",
      "kind": "unit",
      "label": "1 individual school container"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Strawberry milk, reduced sugar",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 6.72,
    "energy_kcal": 59.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.01,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 101.0,
    "potassium_mg": 153.0,
    "protein_g": 3.27,
    "salt_g": 0.0975,
    "sat_fat_g": 1.22,
    "sodium_mg": 39.0,
    "sugar_g": 6.69,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705500",
  "state": "Raw",
  "subcategory": "Flavored milk, lowfat",
  "tags": [
    "flavored-milk-lowfat",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
