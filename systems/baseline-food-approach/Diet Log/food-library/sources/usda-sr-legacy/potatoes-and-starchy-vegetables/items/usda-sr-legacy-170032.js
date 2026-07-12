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
  "id": "usda-sr-legacy-170032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "skin",
      "kind": "unit",
      "label": "skin"
    }
  ],
  "name": "Potatoes, raw, skin",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 12.4,
    "energy_kcal": 243.0,
    "fat_g": 0.1,
    "fibre_g": 2.5,
    "folate_ug": 17.0,
    "iron_mg": 3.24,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 413.0,
    "protein_g": 2.57,
    "salt_g": 0.025,
    "sat_fat_g": 0.026,
    "sodium_mg": 10.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170032",
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
