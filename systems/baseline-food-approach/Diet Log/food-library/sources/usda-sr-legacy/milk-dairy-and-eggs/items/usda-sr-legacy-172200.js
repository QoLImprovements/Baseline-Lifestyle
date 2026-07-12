/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172200",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cheese sauce, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 311.0,
    "carbs_g": 5.48,
    "energy_kcal": 197.0,
    "fat_g": 14.9,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 0.35,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 229.0,
    "potassium_mg": 142.0,
    "protein_g": 10.3,
    "salt_g": 1.2325,
    "sat_fat_g": 8.03,
    "sodium_mg": 493.0,
    "sugar_g": 0.19,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172200",
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
