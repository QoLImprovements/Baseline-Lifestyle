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
  "id": "usda-sr-legacy-170115",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "skin",
      "kind": "unit",
      "label": "skin"
    }
  ],
  "name": "Potatoes, microwaved, cooked, in skin, skin with salt",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 29.6,
    "energy_kcal": 132.0,
    "fat_g": 0.1,
    "fibre_g": 5.5,
    "folate_ug": 17.0,
    "iron_mg": 5.94,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 650.0,
    "protein_g": 4.39,
    "salt_g": 0.63,
    "sat_fat_g": 0.026,
    "sodium_mg": 252.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 15.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170115",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
