/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "5-package-5-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171249",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "5-package-5-oz",
      "kind": "unit",
      "label": "5 package (5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cheese, romano",
  "nutritionPerBasis": {
    "calcium_mg": 1060.0,
    "carbs_g": 3.63,
    "energy_kcal": 1620.0,
    "fat_g": 26.9,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.77,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 760.0,
    "potassium_mg": 86.0,
    "protein_g": 31.8,
    "salt_g": 3.575,
    "sat_fat_g": 17.1,
    "sodium_mg": 1430.0,
    "sugar_g": 0.73,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171249",
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
