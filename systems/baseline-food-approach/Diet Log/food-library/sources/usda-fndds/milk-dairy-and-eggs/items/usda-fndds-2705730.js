/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-tablespoon",
  "description": "Cheese",
  "id": "usda-fndds-2705730",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "5-oz-package",
      "kind": "unit",
      "label": "5 oz package"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz",
      "kind": "unit",
      "label": "1 oz"
    },
    {
      "gramsPerUnit": 10.3,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Cheese, Parmesan, hard",
  "nutritionPerBasis": {
    "calcium_mg": 917.0,
    "carbs_g": 8.36,
    "energy_kcal": 412.0,
    "fat_g": 28.8,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.3,
    "magnesium_mg": 35.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 630.0,
    "potassium_mg": 129.0,
    "protein_g": 29.9,
    "salt_g": 3.5,
    "sat_fat_g": 16.4,
    "sodium_mg": 1400.0,
    "sugar_g": 0.36,
    "vitamin_a_ug": 230.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705730",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
