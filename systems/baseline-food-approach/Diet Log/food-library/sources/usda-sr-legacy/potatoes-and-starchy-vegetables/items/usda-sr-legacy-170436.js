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
  "id": "usda-sr-legacy-170436",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "10-strip",
      "kind": "unit",
      "label": "10 strip"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Potatoes, french fried, crinkle or regular cut, salt added in processing, frozen, as purchased",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 24.0,
    "energy_kcal": 612.0,
    "fat_g": 4.99,
    "fibre_g": 2.0,
    "folate_ug": 31.0,
    "iron_mg": 0.62,
    "magnesium_mg": 21.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 81.0,
    "potassium_mg": 380.0,
    "protein_g": 2.34,
    "salt_g": 0.8725,
    "sat_fat_g": 1.25,
    "sodium_mg": 349.0,
    "sugar_g": 0.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170436",
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
