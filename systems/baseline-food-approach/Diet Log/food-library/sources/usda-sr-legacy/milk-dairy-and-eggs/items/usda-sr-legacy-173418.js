/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cubic-inch",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173418",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 232.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "tbsp-whipped",
      "kind": "unit",
      "label": "tbsp, whipped"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "package-small-3-oz",
      "kind": "unit",
      "label": "package, small (3 oz)"
    },
    {
      "gramsPerUnit": 14.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cheese, cream",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 5.52,
    "energy_kcal": 1470.0,
    "fat_g": 34.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.11,
    "magnesium_mg": 9.0,
    "omega3_g": 0.155,
    "phosphorus_mg": 107.0,
    "potassium_mg": 132.0,
    "protein_g": 6.15,
    "salt_g": 0.785,
    "sat_fat_g": 20.2,
    "sodium_mg": 314.0,
    "sugar_g": 3.76,
    "vitamin_a_ug": 308.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173418",
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
