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
  "id": "usda-sr-legacy-169782",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "patty",
      "kind": "unit",
      "label": "patty"
    }
  ],
  "name": "HUNGRY MAN, Salisbury Steak With Gravy, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 6.96,
    "energy_kcal": 136.0,
    "fat_g": 8.53,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 1.02,
    "magnesium_mg": 19.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 106.0,
    "potassium_mg": 195.0,
    "protein_g": 7.96,
    "salt_g": 0.9475,
    "sat_fat_g": 3.43,
    "sodium_mg": 379.0,
    "sugar_g": 0.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169782",
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
