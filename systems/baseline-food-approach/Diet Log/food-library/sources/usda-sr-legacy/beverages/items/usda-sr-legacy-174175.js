/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-8-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "serving-8-oz",
      "kind": "unit",
      "label": "serving 8 oz"
    }
  ],
  "name": "Beverages, vegetable and fruit juice blend, 100% juice, with added vitamins A, C, E",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 11.2,
    "energy_kcal": 46.0,
    "fat_g": 0.01,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.31,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 101.0,
    "protein_g": 0.3,
    "salt_g": 0.0725,
    "sat_fat_g": 0.0,
    "sodium_mg": 29.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 28.5,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174175",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
