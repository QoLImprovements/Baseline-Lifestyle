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
  "id": "usda-sr-legacy-172187",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 13.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Egg, whole, cooked, scrambled",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 1.61,
    "energy_kcal": 621.0,
    "fat_g": 11.0,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 1.31,
    "magnesium_mg": 11.0,
    "omega3_g": 0.048,
    "phosphorus_mg": 165.0,
    "potassium_mg": 132.0,
    "protein_g": 9.99,
    "salt_g": 0.3625,
    "sat_fat_g": 3.33,
    "sodium_mg": 145.0,
    "sugar_g": 1.39,
    "vitamin_a_ug": 161.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172187",
  "state": "Scrambled",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
