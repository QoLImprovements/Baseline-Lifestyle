/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "recipe-yield",
  "description": "Sweets",
  "id": "usda-sr-legacy-167574",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1531.0,
      "key": "recipe-yield",
      "kind": "unit",
      "label": "recipe yield"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Desserts, flan, caramel custard, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 22.8,
    "energy_kcal": 145.0,
    "fat_g": 4.03,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.38,
    "magnesium_mg": 9.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 96.0,
    "potassium_mg": 118.0,
    "protein_g": 4.53,
    "salt_g": 0.1325,
    "sat_fat_g": 1.8,
    "sodium_mg": 53.0,
    "sugar_g": 22.8,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167574",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
