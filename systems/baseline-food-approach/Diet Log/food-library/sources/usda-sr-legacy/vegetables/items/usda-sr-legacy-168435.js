/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "piece-whole",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168435",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "piece-whole",
      "kind": "unit",
      "label": "piece whole"
    },
    {
      "gramsPerUnit": 97.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup sliced"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup whole"
    }
  ],
  "name": "Mushrooms, shiitake, stir-fried",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 7.68,
    "energy_kcal": 39.0,
    "fat_g": 0.35,
    "fibre_g": 3.6,
    "folate_ug": 14.0,
    "iron_mg": 0.53,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 326.0,
    "protein_g": 3.45,
    "salt_g": 0.0125,
    "sat_fat_g": 0.032,
    "sodium_mg": 5.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168435",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
