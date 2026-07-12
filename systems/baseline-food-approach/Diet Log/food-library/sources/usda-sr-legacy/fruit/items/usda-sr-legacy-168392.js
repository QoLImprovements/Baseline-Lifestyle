/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Balsam-pear (bitter gourd), leafy tips, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 6.68,
    "energy_kcal": 144.0,
    "fat_g": 0.2,
    "fibre_g": 1.9,
    "folate_ug": 88.0,
    "iron_mg": 1.02,
    "magnesium_mg": 94.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 602.0,
    "protein_g": 3.6,
    "salt_g": 0.0325,
    "sat_fat_g": 0.032,
    "sodium_mg": 13.0,
    "sugar_g": 1.04,
    "vitamin_a_ug": 121.0,
    "vitamin_c_mg": 55.6,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 163.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168392",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "fruit",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
