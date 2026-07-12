/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-168959",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    },
    {
      "gramsPerUnit": 8.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spanish rice mix, dry mix, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 76.4,
    "energy_kcal": 1520.0,
    "fat_g": 1.62,
    "fibre_g": 3.1,
    "folate_ug": 162.0,
    "iron_mg": 3.32,
    "magnesium_mg": 37.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 146.0,
    "potassium_mg": 445.0,
    "protein_g": 10.6,
    "salt_g": 2.7,
    "sat_fat_g": 0.395,
    "sodium_mg": 1080.0,
    "sugar_g": 3.83,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168959",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "grains-bread-and-pasta",
    "meals-entrees-and-side-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
