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
  "id": "usda-sr-legacy-171269",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 980.0,
      "key": "quart",
      "kind": "unit",
      "label": "quart"
    },
    {
      "gramsPerUnit": 30.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Milk, nonfat, fluid, with added vitamin A and vitamin D (fat free or skim)",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 4.96,
    "energy_kcal": 34.0,
    "fat_g": 0.08,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.03,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 156.0,
    "protein_g": 3.37,
    "salt_g": 0.105,
    "sat_fat_g": 0.056,
    "sodium_mg": 42.0,
    "sugar_g": 5.09,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171269",
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
