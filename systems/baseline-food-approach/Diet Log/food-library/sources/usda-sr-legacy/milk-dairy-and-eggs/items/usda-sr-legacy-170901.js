/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-5-3-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170901",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "container-5-3-oz",
      "kind": "unit",
      "label": "container (5.3 oz)"
    }
  ],
  "name": "Yogurt, Greek, strawberry, nonfat",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 12.1,
    "energy_kcal": 82.0,
    "fat_g": 0.15,
    "fibre_g": 0.6,
    "folate_ug": 20.0,
    "iron_mg": 0.09,
    "magnesium_mg": 10.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 113.0,
    "potassium_mg": 132.0,
    "protein_g": 8.05,
    "salt_g": 0.0825,
    "sat_fat_g": 0.105,
    "sodium_mg": 33.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170901",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
