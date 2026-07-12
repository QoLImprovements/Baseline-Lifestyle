/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "fl-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170878",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk, canned, evaporated, nonfat, with added vitamin A and vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 290.0,
    "carbs_g": 11.4,
    "energy_kcal": 326.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.29,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 195.0,
    "potassium_mg": 332.0,
    "protein_g": 7.55,
    "salt_g": 0.2875,
    "sat_fat_g": 0.121,
    "sodium_mg": 115.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170878",
  "state": "Canned",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "canned",
    "dairy-and-egg-products",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
