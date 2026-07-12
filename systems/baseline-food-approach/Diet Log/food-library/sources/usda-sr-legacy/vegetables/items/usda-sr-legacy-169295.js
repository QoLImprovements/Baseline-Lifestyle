/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Squash, winter, butternut, raw",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 11.7,
    "energy_kcal": 188.0,
    "fat_g": 0.1,
    "fibre_g": 2.0,
    "folate_ug": 27.0,
    "iron_mg": 0.7,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 352.0,
    "protein_g": 1.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.021,
    "sodium_mg": 4.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 532.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169295",
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
