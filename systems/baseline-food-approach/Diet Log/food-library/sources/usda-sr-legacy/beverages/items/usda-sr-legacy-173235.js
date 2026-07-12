/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-2-tbsp",
  "description": "Beverages",
  "id": "usda-sr-legacy-173235",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving 2 tbsp"
    }
  ],
  "name": "Beverages, orange-flavor drink, breakfast type, powder",
  "nutritionPerBasis": {
    "calcium_mg": 385.0,
    "carbs_g": 98.9,
    "energy_kcal": 386.0,
    "fat_g": 0.0,
    "fibre_g": 0.4,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 190.0,
    "protein_g": 0.0,
    "salt_g": 0.0425,
    "sat_fat_g": 0.0,
    "sodium_mg": 17.0,
    "sugar_g": 92.3,
    "vitamin_a_ug": 599.0,
    "vitamin_c_mg": 231.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173235",
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
