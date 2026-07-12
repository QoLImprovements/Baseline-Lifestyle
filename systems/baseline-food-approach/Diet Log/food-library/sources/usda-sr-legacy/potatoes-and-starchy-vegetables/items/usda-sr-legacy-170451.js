/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "10-strip",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170451",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "10-strip",
      "kind": "unit",
      "label": "10 strip"
    }
  ],
  "name": "Potatoes, french fried, shoestring, salt added in processing, frozen, as purchased",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 25.6,
    "energy_kcal": 163.0,
    "fat_g": 6.24,
    "fibre_g": 2.3,
    "folate_ug": 36.0,
    "iron_mg": 0.72,
    "magnesium_mg": 21.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 90.0,
    "potassium_mg": 379.0,
    "protein_g": 2.16,
    "salt_g": 0.8075,
    "sat_fat_g": 1.37,
    "sodium_mg": 323.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170451",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
