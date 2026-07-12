/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "serving-1-cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172091",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving (1 cup)"
    }
  ],
  "name": "Pasta with Sliced Franks in Tomato Sauce, canned entree",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 12.7,
    "energy_kcal": 375.0,
    "fat_g": 2.38,
    "fibre_g": 1.6,
    "folate_ug": 40.0,
    "iron_mg": 0.91,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 191.0,
    "protein_g": 4.37,
    "salt_g": 0.7175,
    "sat_fat_g": 0.791,
    "sodium_mg": 287.0,
    "sugar_g": 3.17,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172091",
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
