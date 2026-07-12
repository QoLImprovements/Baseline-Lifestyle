/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package-8-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171253",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "package-8-oz",
      "kind": "unit",
      "label": "package (8 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cheese food, pasteurized process, swiss",
  "nutritionPerBasis": {
    "calcium_mg": 723.0,
    "carbs_g": 4.5,
    "energy_kcal": 1350.0,
    "fat_g": 24.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.6,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 526.0,
    "potassium_mg": 284.0,
    "protein_g": 21.9,
    "salt_g": 3.875,
    "sat_fat_g": 15.5,
    "sodium_mg": 1550.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 237.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171253",
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
