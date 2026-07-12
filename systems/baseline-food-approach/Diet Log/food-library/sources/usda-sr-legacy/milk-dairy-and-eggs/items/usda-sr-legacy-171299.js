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
  "id": "usda-sr-legacy-171299",
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
  "name": "Yogurt, Greek, nonfat, strawberry, DANNON OIKOS",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 12.5,
    "energy_kcal": 352.0,
    "fat_g": 0.22,
    "fibre_g": 0.4,
    "folate_ug": 20.0,
    "iron_mg": 0.06,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 114.0,
    "potassium_mg": 145.0,
    "protein_g": 8.03,
    "salt_g": 0.0825,
    "sat_fat_g": 0.11,
    "sodium_mg": 33.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171299",
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
