/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "skin",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170519",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "skin",
      "kind": "unit",
      "label": "skin"
    }
  ],
  "name": "Potatoes, boiled, cooked in skin, skin, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 17.2,
    "energy_kcal": 327.0,
    "fat_g": 0.1,
    "fibre_g": 3.3,
    "folate_ug": 10.0,
    "iron_mg": 6.07,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 407.0,
    "protein_g": 2.86,
    "salt_g": 0.625,
    "sat_fat_g": 0.026,
    "sodium_mg": 250.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170519",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
