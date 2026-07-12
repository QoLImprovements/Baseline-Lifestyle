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
  "id": "usda-sr-legacy-168965",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    }
  ],
  "name": "Salisbury steak with gravy, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 6.78,
    "energy_kcal": 625.0,
    "fat_g": 10.5,
    "fibre_g": 1.0,
    "folate_ug": 13.0,
    "iron_mg": 0.95,
    "magnesium_mg": 17.0,
    "omega3_g": 0.066,
    "phosphorus_mg": 127.0,
    "potassium_mg": 144.0,
    "protein_g": 6.98,
    "salt_g": 1.2725,
    "sat_fat_g": 3.98,
    "sodium_mg": 509.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168965",
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
