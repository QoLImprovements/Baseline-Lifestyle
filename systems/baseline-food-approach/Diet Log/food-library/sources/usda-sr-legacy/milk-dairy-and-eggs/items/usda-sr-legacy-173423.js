/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "large",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173423",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Egg, whole, cooked, fried",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 0.83,
    "energy_kcal": 821.0,
    "fat_g": 14.8,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 1.89,
    "magnesium_mg": 13.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 215.0,
    "potassium_mg": 152.0,
    "protein_g": 13.6,
    "salt_g": 0.5175,
    "sat_fat_g": 4.32,
    "sodium_mg": 207.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 219.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173423",
  "state": "Fried",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "fried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
