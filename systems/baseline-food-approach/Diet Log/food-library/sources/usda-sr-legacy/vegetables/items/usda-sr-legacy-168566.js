/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "medium",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168566",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    }
  ],
  "name": "Tomatillos, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 5.84,
    "energy_kcal": 32.0,
    "fat_g": 1.02,
    "fibre_g": 1.9,
    "folate_ug": 7.0,
    "iron_mg": 0.62,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 268.0,
    "protein_g": 0.96,
    "salt_g": 0.0025,
    "sat_fat_g": 0.139,
    "sodium_mg": 1.0,
    "sugar_g": 3.93,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 11.7,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 10.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168566",
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
