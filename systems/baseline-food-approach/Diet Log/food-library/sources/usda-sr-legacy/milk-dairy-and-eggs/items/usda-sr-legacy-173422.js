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
  "id": "usda-sr-legacy-173422",
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
  "name": "Egg, yolk, raw, frozen, sugared, pasteurized",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 11.0,
    "energy_kcal": 1280.0,
    "fat_g": 22.8,
    "fibre_g": 0.0,
    "folate_ug": 174.0,
    "iron_mg": 3.7,
    "magnesium_mg": 10.0,
    "omega3_g": 0.225,
    "phosphorus_mg": 404.0,
    "potassium_mg": 105.0,
    "protein_g": 13.9,
    "salt_g": 0.175,
    "sat_fat_g": 7.11,
    "sodium_mg": 70.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 316.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.25,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173422",
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
