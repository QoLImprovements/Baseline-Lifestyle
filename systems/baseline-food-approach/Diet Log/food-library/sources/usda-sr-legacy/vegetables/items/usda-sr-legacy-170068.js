/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "10-sprigs",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170068",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "10-sprigs",
      "kind": "unit",
      "label": "10 sprigs"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "sprig",
      "kind": "unit",
      "label": "sprig"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Watercress, raw",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 1.29,
    "energy_kcal": 11.0,
    "fat_g": 0.1,
    "fibre_g": 0.5,
    "folate_ug": 9.0,
    "iron_mg": 0.2,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 330.0,
    "protein_g": 2.3,
    "salt_g": 0.1025,
    "sat_fat_g": 0.027,
    "sodium_mg": 41.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 43.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 250.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170068",
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
