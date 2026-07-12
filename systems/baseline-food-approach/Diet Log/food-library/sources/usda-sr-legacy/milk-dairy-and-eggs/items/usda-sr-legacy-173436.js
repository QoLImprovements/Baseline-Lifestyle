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
  "id": "usda-sr-legacy-173436",
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
      "key": "0-5-lb",
      "kind": "unit",
      "label": "0.5 lb"
    }
  ],
  "name": "Egg, yolk, raw, frozen, salted, pasteurized",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 1.77,
    "energy_kcal": 275.0,
    "fat_g": 22.9,
    "fibre_g": 0.0,
    "folate_ug": 112.0,
    "iron_mg": 3.4,
    "magnesium_mg": 7.0,
    "omega3_g": 0.205,
    "phosphorus_mg": 414.0,
    "potassium_mg": 111.0,
    "protein_g": 14.1,
    "salt_g": 8.725,
    "sat_fat_g": 7.16,
    "sodium_mg": 3490.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 313.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.28,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173436",
  "state": "Frozen",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
