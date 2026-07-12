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
  "id": "usda-sr-legacy-174858",
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
      "gramsPerUnit": 218.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beverages, Lemonade, powder",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 97.6,
    "energy_kcal": 1570.0,
    "fat_g": 1.05,
    "fibre_g": 0.4,
    "folate_ug": 6.0,
    "iron_mg": 0.19,
    "magnesium_mg": 247.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 147.0,
    "protein_g": 0.0,
    "salt_g": 0.1275,
    "sat_fat_g": 0.151,
    "sodium_mg": 51.0,
    "sugar_g": 94.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 39.9,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174858",
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
