/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-diced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169403",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup diced"
    },
    {
      "gramsPerUnit": 1.1,
      "key": "piece-whole",
      "kind": "unit",
      "label": "piece whole"
    }
  ],
  "name": "Mushrooms, maitake, raw",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 6.97,
    "energy_kcal": 130.0,
    "fat_g": 0.19,
    "fibre_g": 2.7,
    "folate_ug": 21.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 204.0,
    "protein_g": 1.94,
    "salt_g": 0.0025,
    "sat_fat_g": 0.03,
    "sodium_mg": 1.0,
    "sugar_g": 2.07,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169403",
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
