/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171283",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Whey, sweet, dried",
  "nutritionPerBasis": {
    "calcium_mg": 796.0,
    "carbs_g": 74.5,
    "energy_kcal": 353.0,
    "fat_g": 1.07,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.88,
    "magnesium_mg": 176.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 932.0,
    "potassium_mg": 2080.0,
    "protein_g": 12.9,
    "salt_g": 2.7,
    "sat_fat_g": 0.684,
    "sodium_mg": 1080.0,
    "sugar_g": 74.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171283",
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
