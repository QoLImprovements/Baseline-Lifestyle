/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169256",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Mustard greens, raw",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 4.67,
    "energy_kcal": 114.0,
    "fat_g": 0.42,
    "fibre_g": 3.2,
    "folate_ug": 12.0,
    "iron_mg": 1.64,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 384.0,
    "protein_g": 2.86,
    "salt_g": 0.05,
    "sat_fat_g": 0.01,
    "sodium_mg": 20.0,
    "sugar_g": 1.32,
    "vitamin_a_ug": 151.0,
    "vitamin_c_mg": 70.0,
    "vitamin_e_mg": 2.01,
    "vitamin_k_ug": 258.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169256",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "condiments-and-sauces",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
