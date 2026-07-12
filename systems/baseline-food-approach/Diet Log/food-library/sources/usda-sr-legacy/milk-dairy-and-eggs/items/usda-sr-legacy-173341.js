/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173341",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Macaroni and cheese, dry mix, prepared with 2% milk and 80% stick margarine from dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 23.9,
    "energy_kcal": 190.0,
    "fat_g": 8.28,
    "fibre_g": 1.2,
    "folate_ug": 70.0,
    "iron_mg": 0.99,
    "magnesium_mg": 17.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 112.0,
    "potassium_mg": 129.0,
    "protein_g": 4.89,
    "salt_g": 0.845,
    "sat_fat_g": 1.82,
    "sodium_mg": 338.0,
    "sugar_g": 4.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173341",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
