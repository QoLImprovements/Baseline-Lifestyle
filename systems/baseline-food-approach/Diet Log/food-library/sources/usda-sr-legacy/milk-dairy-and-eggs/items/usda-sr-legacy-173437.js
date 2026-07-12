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
  "id": "usda-sr-legacy-173437",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
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
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    }
  ],
  "name": "Cheese, mexican, queso asadero",
  "nutritionPerBasis": {
    "calcium_mg": 661.0,
    "carbs_g": 4.13,
    "energy_kcal": 1490.0,
    "fat_g": 25.0,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.51,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 443.0,
    "potassium_mg": 86.0,
    "protein_g": 22.6,
    "salt_g": 1.5175,
    "sat_fat_g": 14.8,
    "sodium_mg": 607.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173437",
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
