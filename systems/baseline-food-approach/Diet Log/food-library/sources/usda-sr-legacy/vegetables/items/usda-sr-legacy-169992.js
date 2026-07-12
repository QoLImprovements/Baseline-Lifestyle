/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169992",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Chicory greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 4.7,
    "energy_kcal": 23.0,
    "fat_g": 0.3,
    "fibre_g": 4.0,
    "folate_ug": 110.0,
    "iron_mg": 0.9,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 420.0,
    "protein_g": 1.7,
    "salt_g": 0.1125,
    "sat_fat_g": 0.073,
    "sodium_mg": 45.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 286.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 298.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169992",
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
