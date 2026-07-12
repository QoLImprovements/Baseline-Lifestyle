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
  "id": "usda-sr-legacy-170113",
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
  "name": "Potatoes, baked, skin only, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 46.1,
    "energy_kcal": 830.0,
    "fat_g": 0.1,
    "fibre_g": 7.9,
    "folate_ug": 22.0,
    "iron_mg": 7.04,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 573.0,
    "protein_g": 4.29,
    "salt_g": 0.6425,
    "sat_fat_g": 0.026,
    "sodium_mg": 257.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 13.5,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170113",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
