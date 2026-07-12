/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171243",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "box",
      "kind": "unit",
      "label": "box"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "package-8-oz",
      "kind": "unit",
      "label": "package (8 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    }
  ],
  "name": "Cheese, limburger",
  "nutritionPerBasis": {
    "calcium_mg": 497.0,
    "carbs_g": 0.49,
    "energy_kcal": 327.0,
    "fat_g": 27.2,
    "fibre_g": 0.0,
    "folate_ug": 58.0,
    "iron_mg": 0.13,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 393.0,
    "potassium_mg": 128.0,
    "protein_g": 20.0,
    "salt_g": 2.0,
    "sat_fat_g": 16.7,
    "sodium_mg": 800.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 340.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171243",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
