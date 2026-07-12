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
  "id": "usda-sr-legacy-168396",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Lima beans, immature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 20.2,
    "energy_kcal": 473.0,
    "fat_g": 0.86,
    "fibre_g": 4.9,
    "folate_ug": 34.0,
    "iron_mg": 3.14,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 467.0,
    "protein_g": 6.84,
    "salt_g": 0.02,
    "sat_fat_g": 0.198,
    "sodium_mg": 8.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 23.4,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168396",
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
