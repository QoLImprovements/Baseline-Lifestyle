/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "fl-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171278",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 976.0,
      "key": "quart",
      "kind": "unit",
      "label": "quart"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk, goat, fluid, with added vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 4.45,
    "energy_kcal": 288.0,
    "fat_g": 4.14,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.05,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 204.0,
    "protein_g": 3.56,
    "salt_g": 0.125,
    "sat_fat_g": 2.67,
    "sodium_mg": 50.0,
    "sugar_g": 4.45,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171278",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
