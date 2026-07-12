/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171240",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "package-8-oz",
      "kind": "unit",
      "label": "package (8 oz)"
    }
  ],
  "name": "Cheese, gjetost",
  "nutritionPerBasis": {
    "calcium_mg": 400.0,
    "carbs_g": 42.6,
    "energy_kcal": 1950.0,
    "fat_g": 29.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.52,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 444.0,
    "potassium_mg": 1410.0,
    "protein_g": 9.65,
    "salt_g": 1.5,
    "sat_fat_g": 19.2,
    "sodium_mg": 600.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 334.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171240",
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
