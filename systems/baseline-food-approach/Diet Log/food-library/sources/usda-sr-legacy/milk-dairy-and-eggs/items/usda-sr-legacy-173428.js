/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-sifted",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173428",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "cup-sifted",
      "kind": "unit",
      "label": "cup, sifted"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Egg, yolk, dried",
  "nutritionPerBasis": {
    "calcium_mg": 289.0,
    "carbs_g": 0.66,
    "energy_kcal": 669.0,
    "fat_g": 59.1,
    "fibre_g": 0.0,
    "folate_ug": 209.0,
    "iron_mg": 9.56,
    "magnesium_mg": 26.0,
    "omega3_g": 0.463,
    "phosphorus_mg": 1040.0,
    "potassium_mg": 264.0,
    "protein_g": 33.6,
    "salt_g": 0.3725,
    "sat_fat_g": 20.3,
    "sodium_mg": 149.0,
    "sugar_g": 0.23,
    "vitamin_a_ug": 483.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.81,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173428",
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
