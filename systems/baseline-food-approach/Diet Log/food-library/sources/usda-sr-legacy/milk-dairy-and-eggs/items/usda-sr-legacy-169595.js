/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-169595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 563.0,
      "key": "recipe-yield",
      "kind": "unit",
      "label": "recipe yield"
    }
  ],
  "name": "Desserts, egg custard, baked, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 11.0,
    "energy_kcal": 104.0,
    "fat_g": 4.58,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.35,
    "magnesium_mg": 11.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 113.0,
    "potassium_mg": 148.0,
    "protein_g": 5.02,
    "salt_g": 0.1525,
    "sat_fat_g": 2.16,
    "sodium_mg": 61.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169595",
  "state": "Baked",
  "subcategory": "Sweets",
  "tags": [
    "baked",
    "milk-dairy-and-eggs",
    "sweets"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
