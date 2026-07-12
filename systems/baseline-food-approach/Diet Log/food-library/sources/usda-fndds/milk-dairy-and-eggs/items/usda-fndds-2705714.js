/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-crumbled",
  "description": "Cheese",
  "id": "usda-fndds-2705714",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup-crumbled",
      "kind": "unit",
      "label": "1 cup, crumbled"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-wedge-1-33-oz",
      "kind": "unit",
      "label": "1 wedge (1.33 oz)"
    },
    {
      "gramsPerUnit": 21.0,
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
  "name": "Cheese, Feta",
  "nutritionPerBasis": {
    "calcium_mg": 371.0,
    "carbs_g": 5.58,
    "energy_kcal": 273.0,
    "fat_g": 19.1,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 0.07,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 328.0,
    "potassium_mg": 105.0,
    "protein_g": 19.7,
    "salt_g": 2.575,
    "sat_fat_g": 11.2,
    "sodium_mg": 1030.0,
    "sugar_g": 1.63,
    "vitamin_a_ug": 147.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705714",
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
