/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice-2-3-4-x-1-x-1-2",
  "description": "Soy and meat-alternative products",
  "id": "usda-fndds-2707449",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "1-slice-2-3-4-x-1-x-1-2",
      "kind": "unit",
      "label": "1 slice (2-3/4\" x 1\" x 1/2\")"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Soybean curd, breaded, fried",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 8.71,
    "energy_kcal": 150.0,
    "fat_g": 9.62,
    "fibre_g": 0.7,
    "folate_ug": 47.0,
    "iron_mg": 1.58,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 134.0,
    "protein_g": 8.39,
    "salt_g": 0.2275,
    "sat_fat_g": 2.08,
    "sodium_mg": 91.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707449",
  "state": "Fried",
  "subcategory": "Soy and meat-alternative products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "soy-and-meat-alternative-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
