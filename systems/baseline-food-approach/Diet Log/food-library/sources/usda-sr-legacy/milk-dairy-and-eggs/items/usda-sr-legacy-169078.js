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
  "id": "usda-sr-legacy-169078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Cheese, cottage, with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 3.0,
    "energy_kcal": 397.0,
    "fat_g": 4.2,
    "fibre_g": 0.1,
    "folate_ug": 17.0,
    "iron_mg": 0.1,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 86.0,
    "protein_g": 10.9,
    "salt_g": 1.0075,
    "sat_fat_g": 2.65,
    "sodium_mg": 403.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 11.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169078",
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
