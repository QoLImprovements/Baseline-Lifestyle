/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "sprig",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169398",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "sprig",
      "kind": "unit",
      "label": "sprig"
    },
    {
      "gramsPerUnit": 0.8,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Epazote, raw",
  "nutritionPerBasis": {
    "calcium_mg": 275.0,
    "carbs_g": 7.44,
    "energy_kcal": 134.0,
    "fat_g": 0.52,
    "fibre_g": 3.8,
    "folate_ug": 215.0,
    "iron_mg": 1.88,
    "magnesium_mg": 121.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 633.0,
    "protein_g": 0.33,
    "salt_g": 0.1075,
    "sat_fat_g": 0.0,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169398",
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
