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
  "id": "usda-sr-legacy-173419",
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
      "gramsPerUnit": 198.0,
      "key": "package-7-oz",
      "kind": "unit",
      "label": "package (7 oz)"
    }
  ],
  "name": "Cheese, edam",
  "nutritionPerBasis": {
    "calcium_mg": 731.0,
    "carbs_g": 1.43,
    "energy_kcal": 1490.0,
    "fat_g": 28.6,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.44,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 536.0,
    "potassium_mg": 188.0,
    "protein_g": 25.0,
    "salt_g": 2.4325,
    "sat_fat_g": 18.7,
    "sodium_mg": 973.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 243.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173419",
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
