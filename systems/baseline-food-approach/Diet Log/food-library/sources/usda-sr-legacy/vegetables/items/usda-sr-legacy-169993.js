/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-1-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169993",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "0-5-cup-1-pieces",
      "kind": "unit",
      "label": "0.5 cup (1\" pieces)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "root",
      "kind": "unit",
      "label": "root"
    }
  ],
  "name": "Chicory roots, raw",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 17.5,
    "energy_kcal": 72.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 23.0,
    "iron_mg": 0.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 290.0,
    "protein_g": 1.4,
    "salt_g": 0.125,
    "sat_fat_g": 0.048,
    "sodium_mg": 50.0,
    "sugar_g": 8.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169993",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
