/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "can-6-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170459",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "can-6-oz",
      "kind": "unit",
      "label": "can (6 oz)"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tomato products, canned, paste, without salt added (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 18.9,
    "energy_kcal": 343.0,
    "fat_g": 0.47,
    "fibre_g": 4.1,
    "folate_ug": 12.0,
    "iron_mg": 2.98,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 1010.0,
    "protein_g": 4.32,
    "salt_g": 0.1475,
    "sat_fat_g": 0.1,
    "sodium_mg": 59.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 21.9,
    "vitamin_e_mg": 4.3,
    "vitamin_k_ug": 11.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170459",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
