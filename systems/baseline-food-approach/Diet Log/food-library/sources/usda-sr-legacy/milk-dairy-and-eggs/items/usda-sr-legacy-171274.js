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
  "id": "usda-sr-legacy-171274",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Milk, buttermilk, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1180.0,
    "carbs_g": 49.0,
    "energy_kcal": 387.0,
    "fat_g": 5.78,
    "fibre_g": 0.0,
    "folate_ug": 47.0,
    "iron_mg": 0.3,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 933.0,
    "potassium_mg": 1590.0,
    "protein_g": 34.3,
    "salt_g": 1.2925,
    "sat_fat_g": 3.6,
    "sodium_mg": 517.0,
    "sugar_g": 49.0,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171274",
  "state": "Dried",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
