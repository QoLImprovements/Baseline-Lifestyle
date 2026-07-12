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
  "id": "usda-sr-legacy-170872",
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
  "name": "Milk, lowfat, fluid, 1% milkfat, with added vitamin A and vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 4.99,
    "energy_kcal": 177.0,
    "fat_g": 0.97,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.03,
    "magnesium_mg": 11.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 95.0,
    "potassium_mg": 150.0,
    "protein_g": 3.37,
    "salt_g": 0.11,
    "sat_fat_g": 0.633,
    "sodium_mg": 44.0,
    "sugar_g": 5.2,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170872",
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
