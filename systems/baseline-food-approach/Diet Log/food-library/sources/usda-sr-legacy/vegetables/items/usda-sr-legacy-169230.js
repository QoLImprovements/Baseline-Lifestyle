/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tsp",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169230",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.8,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "clove",
      "kind": "unit",
      "label": "clove"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "3-cloves",
      "kind": "unit",
      "label": "3 cloves"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Garlic, raw",
  "nutritionPerBasis": {
    "calcium_mg": 181.0,
    "carbs_g": 33.1,
    "energy_kcal": 149.0,
    "fat_g": 0.5,
    "fibre_g": 2.1,
    "folate_ug": 3.0,
    "iron_mg": 1.7,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 401.0,
    "protein_g": 6.36,
    "salt_g": 0.0425,
    "sat_fat_g": 0.089,
    "sodium_mg": 17.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 31.2,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169230",
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
