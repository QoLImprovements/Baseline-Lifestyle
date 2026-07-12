/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pudding",
  "id": "usda-fndds-2705700",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Barfi or Burfi, Indian dessert",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 40.4,
    "energy_kcal": 284.0,
    "fat_g": 11.4,
    "fibre_g": 0.4,
    "folate_ug": 4.0,
    "iron_mg": 0.22,
    "magnesium_mg": 19.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 127.0,
    "potassium_mg": 185.0,
    "protein_g": 5.42,
    "salt_g": 0.1775,
    "sat_fat_g": 6.11,
    "sodium_mg": 71.0,
    "sugar_g": 37.0,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705700",
  "state": "Unspecified",
  "subcategory": "Pudding",
  "tags": [
    "pudding",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
