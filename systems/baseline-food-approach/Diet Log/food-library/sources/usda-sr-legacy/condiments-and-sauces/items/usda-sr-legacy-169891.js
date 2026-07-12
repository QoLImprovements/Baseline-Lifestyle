/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169891",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cabbage, mustard, salted",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 5.63,
    "energy_kcal": 28.0,
    "fat_g": 0.1,
    "fibre_g": 3.1,
    "folate_ug": 72.0,
    "iron_mg": 0.7,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 246.0,
    "protein_g": 1.1,
    "salt_g": 1.7925,
    "sat_fat_g": 0.013,
    "sodium_mg": 717.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 116.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169891",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "condiments-and-sauces",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
