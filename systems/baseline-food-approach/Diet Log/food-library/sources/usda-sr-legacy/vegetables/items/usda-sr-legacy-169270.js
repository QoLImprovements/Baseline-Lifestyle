/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "flower",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169270",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "flower",
      "kind": "unit",
      "label": "flower"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pumpkin flowers, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 3.28,
    "energy_kcal": 63.0,
    "fat_g": 0.07,
    "fibre_g": 0.0,
    "folate_ug": 59.0,
    "iron_mg": 0.7,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 173.0,
    "protein_g": 1.03,
    "salt_g": 0.0125,
    "sat_fat_g": 0.036,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 28.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169270",
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
