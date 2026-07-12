/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169284",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "10-sprouts",
      "kind": "unit",
      "label": "10 sprouts"
    }
  ],
  "name": "Soybeans, mature seeds, sprouted, raw",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 9.57,
    "energy_kcal": 510.0,
    "fat_g": 6.7,
    "fibre_g": 1.1,
    "folate_ug": 172.0,
    "iron_mg": 2.1,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 484.0,
    "protein_g": 13.1,
    "salt_g": 0.035,
    "sat_fat_g": 0.929,
    "sodium_mg": 14.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 15.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169284",
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
