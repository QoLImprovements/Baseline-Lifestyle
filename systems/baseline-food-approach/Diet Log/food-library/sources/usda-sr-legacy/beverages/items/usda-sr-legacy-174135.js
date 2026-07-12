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
  "id": "usda-sr-legacy-174135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving 2 tbsp"
    }
  ],
  "name": "Beverages, coffee, instant, mocha, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 271.0,
    "carbs_g": 74.0,
    "energy_kcal": 1920.0,
    "fat_g": 15.9,
    "fibre_g": 1.9,
    "folate_ug": 9.0,
    "iron_mg": 0.0,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 251.0,
    "potassium_mg": 1030.0,
    "protein_g": 5.29,
    "salt_g": 0.7925,
    "sat_fat_g": 4.93,
    "sodium_mg": 317.0,
    "sugar_g": 58.2,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174135",
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
