/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving",
  "description": "Beverages",
  "id": "usda-sr-legacy-174860",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "0-5-scoop-2-tbsp",
      "kind": "unit",
      "label": "0.5 scoop (2 tbsp)"
    }
  ],
  "name": "Beverages, lemonade-flavor drink, powder",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 97.9,
    "energy_kcal": 380.0,
    "fat_g": 1.01,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.17,
    "magnesium_mg": 165.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 39.0,
    "protein_g": 0.0,
    "salt_g": 0.325,
    "sat_fat_g": 0.183,
    "sodium_mg": 130.0,
    "sugar_g": 97.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 40.6,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174860",
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
