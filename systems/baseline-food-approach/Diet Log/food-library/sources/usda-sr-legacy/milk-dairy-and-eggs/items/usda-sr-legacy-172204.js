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
  "id": "usda-sr-legacy-172204",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Egg, white, dried",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 7.8,
    "energy_kcal": 1600.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.15,
    "magnesium_mg": 88.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 1120.0,
    "protein_g": 81.1,
    "salt_g": 3.2,
    "sat_fat_g": 0.0,
    "sodium_mg": 1280.0,
    "sugar_g": 5.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172204",
  "state": "Dried",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
