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
  "id": "usda-sr-legacy-169395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 6.1,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    }
  ],
  "name": "Peppers, serrano, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 6.7,
    "energy_kcal": 32.0,
    "fat_g": 0.44,
    "fibre_g": 3.7,
    "folate_ug": 23.0,
    "iron_mg": 0.86,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 305.0,
    "protein_g": 1.74,
    "salt_g": 0.025,
    "sat_fat_g": 0.059,
    "sodium_mg": 10.0,
    "sugar_g": 3.83,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 44.9,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 11.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169395",
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
