/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169957",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "package-12-oz",
      "kind": "unit",
      "label": "package (12 oz)"
    }
  ],
  "name": "Mung beans, mature seeds, sprouted, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 5.94,
    "energy_kcal": 30.0,
    "fat_g": 0.18,
    "fibre_g": 1.8,
    "folate_ug": 61.0,
    "iron_mg": 0.91,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 149.0,
    "protein_g": 3.04,
    "salt_g": 0.015,
    "sat_fat_g": 0.046,
    "sodium_mg": 6.0,
    "sugar_g": 4.13,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 33.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169957",
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
