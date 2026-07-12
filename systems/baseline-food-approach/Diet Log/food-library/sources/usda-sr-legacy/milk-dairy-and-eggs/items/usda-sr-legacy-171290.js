/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-1-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171290",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
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
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup-melted",
      "kind": "unit",
      "label": "cup, melted"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice-3-4-oz",
      "kind": "unit",
      "label": "slice (3/4 oz)"
    }
  ],
  "name": "Cheese, pasteurized process, American, without added vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 1040.0,
    "carbs_g": 3.7,
    "energy_kcal": 371.0,
    "fat_g": 31.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.63,
    "magnesium_mg": 26.0,
    "omega3_g": 0.176,
    "phosphorus_mg": 641.0,
    "potassium_mg": 132.0,
    "protein_g": 18.1,
    "salt_g": 4.175,
    "sat_fat_g": 18.1,
    "sodium_mg": 1670.0,
    "sugar_g": 2.26,
    "vitamin_a_ug": 250.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171290",
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
