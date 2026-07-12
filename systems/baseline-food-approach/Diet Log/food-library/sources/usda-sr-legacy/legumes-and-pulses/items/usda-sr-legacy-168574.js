/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "pod",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168574",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.1,
      "key": "pod",
      "kind": "unit",
      "label": "pod"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, fava, in pod, raw",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 17.6,
    "energy_kcal": 88.0,
    "fat_g": 0.73,
    "fibre_g": 7.5,
    "folate_ug": 148.0,
    "iron_mg": 1.55,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 332.0,
    "protein_g": 7.92,
    "salt_g": 0.0625,
    "sat_fat_g": 0.118,
    "sodium_mg": 25.0,
    "sugar_g": 9.21,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 40.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168574",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "legumes-and-pulses",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
