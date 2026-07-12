/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168391",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    }
  ],
  "name": "Balsam-pear (bitter gourd), leafy tips, raw",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 3.29,
    "energy_kcal": 126.0,
    "fat_g": 0.69,
    "fibre_g": 0.0,
    "folate_ug": 128.0,
    "iron_mg": 2.04,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 99.0,
    "potassium_mg": 608.0,
    "protein_g": 5.3,
    "salt_g": 0.0275,
    "sat_fat_g": 0.0,
    "sodium_mg": 11.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 88.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168391",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fruit",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
