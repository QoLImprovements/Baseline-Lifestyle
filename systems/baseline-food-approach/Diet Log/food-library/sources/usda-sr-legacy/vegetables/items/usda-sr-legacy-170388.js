/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-shredded",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    }
  ],
  "name": "Cabbage, savoy, raw",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 6.1,
    "energy_kcal": 27.0,
    "fat_g": 0.1,
    "fibre_g": 3.1,
    "folate_ug": 80.0,
    "iron_mg": 0.4,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 230.0,
    "protein_g": 2.0,
    "salt_g": 0.07,
    "sat_fat_g": 0.013,
    "sodium_mg": 28.0,
    "sugar_g": 2.27,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 31.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 68.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170388",
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
