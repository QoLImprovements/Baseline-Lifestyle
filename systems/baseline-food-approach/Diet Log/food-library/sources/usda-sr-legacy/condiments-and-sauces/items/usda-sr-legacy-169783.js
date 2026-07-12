/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "patty",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    }
  ],
  "name": "BANQUET, Salisbury Steak With Gravy, family size, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 6.96,
    "energy_kcal": 650.0,
    "fat_g": 11.1,
    "fibre_g": 1.0,
    "folate_ug": 13.0,
    "iron_mg": 0.98,
    "magnesium_mg": 17.0,
    "omega3_g": 0.074,
    "phosphorus_mg": 135.0,
    "potassium_mg": 142.0,
    "protein_g": 6.89,
    "salt_g": 1.2925,
    "sat_fat_g": 4.28,
    "sodium_mg": 517.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169783",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "condiments-and-sauces",
    "frozen",
    "meals-entrees-and-side-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
