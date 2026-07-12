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
  "id": "usda-sr-legacy-169960",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, shellie, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 6.19,
    "energy_kcal": 30.0,
    "fat_g": 0.19,
    "fibre_g": 3.4,
    "folate_ug": 18.0,
    "iron_mg": 0.99,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 109.0,
    "protein_g": 1.76,
    "salt_g": 0.835,
    "sat_fat_g": 0.023,
    "sodium_mg": 334.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169960",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
