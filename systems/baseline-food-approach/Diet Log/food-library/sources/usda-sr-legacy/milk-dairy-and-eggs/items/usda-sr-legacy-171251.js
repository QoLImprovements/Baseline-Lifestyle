/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-melted",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171251",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup-melted",
      "kind": "unit",
      "label": "cup, melted"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    }
  ],
  "name": "Cheese, swiss",
  "nutritionPerBasis": {
    "calcium_mg": 890.0,
    "carbs_g": 1.44,
    "energy_kcal": 393.0,
    "fat_g": 31.0,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.13,
    "magnesium_mg": 33.0,
    "omega3_g": 0.152,
    "phosphorus_mg": 574.0,
    "potassium_mg": 72.0,
    "protein_g": 27.0,
    "salt_g": 0.4675,
    "sat_fat_g": 18.2,
    "sodium_mg": 187.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 288.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171251",
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
