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
  "id": "usda-sr-legacy-169234",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Hyacinth-beans, immature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 9.19,
    "energy_kcal": 192.0,
    "fat_g": 0.2,
    "fibre_g": 3.3,
    "folate_ug": 62.0,
    "iron_mg": 0.74,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 252.0,
    "protein_g": 2.1,
    "salt_g": 0.005,
    "sat_fat_g": 0.088,
    "sodium_mg": 2.0,
    "sugar_g": 4.08,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 12.9,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 18.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169234",
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
