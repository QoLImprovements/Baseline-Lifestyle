/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Yam, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 27.9,
    "energy_kcal": 118.0,
    "fat_g": 0.17,
    "fibre_g": 4.1,
    "folate_ug": 23.0,
    "iron_mg": 0.54,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 816.0,
    "protein_g": 1.53,
    "salt_g": 0.0225,
    "sat_fat_g": 0.037,
    "sodium_mg": 9.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 17.1,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170071",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
