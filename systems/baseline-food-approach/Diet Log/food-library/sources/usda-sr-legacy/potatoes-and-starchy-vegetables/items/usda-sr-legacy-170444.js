/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "potato",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170444",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "potato",
      "kind": "unit",
      "label": "potato"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Potatoes, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 13.6,
    "energy_kcal": 251.0,
    "fat_g": 0.21,
    "fibre_g": 2.3,
    "folate_ug": 6.0,
    "iron_mg": 1.26,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 229.0,
    "protein_g": 1.41,
    "salt_g": 0.5475,
    "sat_fat_g": 0.054,
    "sodium_mg": 219.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170444",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
