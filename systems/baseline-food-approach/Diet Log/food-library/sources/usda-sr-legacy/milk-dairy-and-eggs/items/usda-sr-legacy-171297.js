/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "5-3-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171297",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "5-3-oz",
      "kind": "unit",
      "label": "5.3 oz"
    }
  ],
  "name": "Yogurt, Greek, strawberry, DANNON OIKOS",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 11.7,
    "energy_kcal": 443.0,
    "fat_g": 2.92,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.07,
    "magnesium_mg": 10.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 110.0,
    "potassium_mg": 131.0,
    "protein_g": 8.25,
    "salt_g": 0.085,
    "sat_fat_g": 1.83,
    "sodium_mg": 34.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171297",
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
