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
  "id": "usda-sr-legacy-169979",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    }
  ],
  "name": "Cabbage, chinese (pe-tsai), raw",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 3.23,
    "energy_kcal": 16.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 79.0,
    "iron_mg": 0.31,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 238.0,
    "protein_g": 1.2,
    "salt_g": 0.0225,
    "sat_fat_g": 0.043,
    "sodium_mg": 9.0,
    "sugar_g": 1.41,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 42.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169979",
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
