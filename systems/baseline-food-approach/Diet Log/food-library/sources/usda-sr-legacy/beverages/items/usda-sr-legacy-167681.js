/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "tsp",
  "description": "Beverages",
  "id": "usda-sr-legacy-167681",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Beverages, fruit-flavored drink, dry powdered mix, low calorie, with aspartame",
  "nutritionPerBasis": {
    "calcium_mg": 1050.0,
    "carbs_g": 87.4,
    "energy_kcal": 912.0,
    "fat_g": 0.04,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.08,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1240.0,
    "potassium_mg": 498.0,
    "protein_g": 0.45,
    "salt_g": 1.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 404.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 560.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167681",
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
