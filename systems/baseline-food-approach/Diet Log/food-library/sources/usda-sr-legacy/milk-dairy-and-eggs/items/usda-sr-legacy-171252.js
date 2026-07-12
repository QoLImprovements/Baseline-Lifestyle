/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package-8-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171252",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 113.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-3-4-oz",
      "kind": "unit",
      "label": "slice (3/4 oz)"
    }
  ],
  "name": "Cheese food, pasteurized process, American, vitamin D fortified",
  "nutritionPerBasis": {
    "calcium_mg": 682.0,
    "carbs_g": 8.56,
    "energy_kcal": 330.0,
    "fat_g": 25.6,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.26,
    "magnesium_mg": 27.0,
    "omega3_g": 0.152,
    "phosphorus_mg": 438.0,
    "potassium_mg": 255.0,
    "protein_g": 16.9,
    "salt_g": 3.2,
    "sat_fat_g": 15.1,
    "sodium_mg": 1280.0,
    "sugar_g": 5.59,
    "vitamin_a_ug": 201.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.63,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171252",
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
