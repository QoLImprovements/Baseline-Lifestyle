/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-crumbled",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-crumbled",
      "kind": "unit",
      "label": "cup, crumbled"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "wedge-1-33-oz",
      "kind": "unit",
      "label": "wedge (1.33 oz)"
    }
  ],
  "name": "Cheese, feta",
  "nutritionPerBasis": {
    "calcium_mg": 493.0,
    "carbs_g": 3.88,
    "energy_kcal": 265.0,
    "fat_g": 21.5,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 0.65,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 337.0,
    "potassium_mg": 62.0,
    "protein_g": 14.2,
    "salt_g": 2.85,
    "sat_fat_g": 13.3,
    "sodium_mg": 1140.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 125.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173420",
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
