/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "10-beans-4-long",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169320",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "10-beans-4-long",
      "kind": "unit",
      "label": "10 beans (4\" long)"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "cup-1-2-pieces",
      "kind": "unit",
      "label": "cup 1/2\" pieces"
    }
  ],
  "name": "Beans, snap, yellow, raw",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 7.13,
    "energy_kcal": 31.0,
    "fat_g": 0.12,
    "fibre_g": 3.4,
    "folate_ug": 37.0,
    "iron_mg": 1.04,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 209.0,
    "protein_g": 1.82,
    "salt_g": 0.015,
    "sat_fat_g": 0.026,
    "sodium_mg": 6.0,
    "sugar_g": 3.27,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 16.3,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 43.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169320",
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
