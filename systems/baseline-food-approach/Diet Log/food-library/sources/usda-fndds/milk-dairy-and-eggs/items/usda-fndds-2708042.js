/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-piece",
  "description": "Cakes and pies",
  "id": "usda-fndds-2708042",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Strudel, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 39.1,
    "energy_kcal": 358.0,
    "fat_g": 19.8,
    "fibre_g": 0.4,
    "folate_ug": 33.0,
    "iron_mg": 0.32,
    "magnesium_mg": 12.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 94.0,
    "potassium_mg": 105.0,
    "protein_g": 5.85,
    "salt_g": 0.475,
    "sat_fat_g": 11.0,
    "sodium_mg": 190.0,
    "sugar_g": 19.4,
    "vitamin_a_ug": 190.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708042",
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
