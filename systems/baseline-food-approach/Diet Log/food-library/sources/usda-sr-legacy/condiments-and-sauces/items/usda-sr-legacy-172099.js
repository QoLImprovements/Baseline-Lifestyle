/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172099",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Spaghetti, with meatballs in tomato sauce, canned",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 11.4,
    "energy_kcal": 420.0,
    "fat_g": 4.11,
    "fibre_g": 2.7,
    "folate_ug": 20.0,
    "iron_mg": 1.03,
    "magnesium_mg": 13.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 57.0,
    "potassium_mg": 217.0,
    "protein_g": 4.37,
    "salt_g": 0.7,
    "sat_fat_g": 1.46,
    "sodium_mg": 280.0,
    "sugar_g": 2.91,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172099",
  "state": "Canned",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "meals-entrees-and-side-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
