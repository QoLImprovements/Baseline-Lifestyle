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
  "id": "usda-sr-legacy-174181",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Beverages, nutritional shake mix, high protein, powder",
  "nutritionPerBasis": {
    "calcium_mg": 714.0,
    "carbs_g": 20.4,
    "energy_kcal": 392.0,
    "fat_g": 10.7,
    "fibre_g": 0.0,
    "folate_ug": 571.0,
    "iron_mg": 22.5,
    "magnesium_mg": 500.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1430.0,
    "potassium_mg": 1000.0,
    "protein_g": 53.6,
    "salt_g": 3.025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1210.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 1880.0,
    "vitamin_c_mg": 75.0,
    "vitamin_e_mg": 16.9,
    "vitamin_k_ug": 125.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174181",
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
