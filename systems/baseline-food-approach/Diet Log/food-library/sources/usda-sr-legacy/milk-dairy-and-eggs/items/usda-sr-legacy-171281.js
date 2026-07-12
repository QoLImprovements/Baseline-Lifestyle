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
  "id": "usda-sr-legacy-171281",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.9,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Whey, acid, dried",
  "nutritionPerBasis": {
    "calcium_mg": 2050.0,
    "carbs_g": 73.4,
    "energy_kcal": 339.0,
    "fat_g": 0.54,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 1.24,
    "magnesium_mg": 199.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1350.0,
    "potassium_mg": 2290.0,
    "protein_g": 11.7,
    "salt_g": 2.42,
    "sat_fat_g": 0.342,
    "sodium_mg": 968.0,
    "sugar_g": 73.4,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171281",
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
