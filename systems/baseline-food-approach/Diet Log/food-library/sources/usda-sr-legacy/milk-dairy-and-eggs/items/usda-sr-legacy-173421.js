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
  "id": "usda-sr-legacy-173421",
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
  "name": "Egg, yolk, raw, frozen, pasteurized",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 0.81,
    "energy_kcal": 296.0,
    "fat_g": 25.6,
    "fibre_g": 0.0,
    "folate_ug": 151.0,
    "iron_mg": 4.55,
    "magnesium_mg": 11.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 420.0,
    "potassium_mg": 121.0,
    "protein_g": 15.5,
    "salt_g": 0.1675,
    "sat_fat_g": 8.62,
    "sodium_mg": 67.0,
    "sugar_g": 0.16,
    "vitamin_a_ug": 422.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.24,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173421",
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
