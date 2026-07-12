/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173736",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, cranberry (roman), mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 24.5,
    "energy_kcal": 569.0,
    "fat_g": 0.46,
    "fibre_g": 8.6,
    "folate_ug": 207.0,
    "iron_mg": 2.09,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 135.0,
    "potassium_mg": 387.0,
    "protein_g": 9.34,
    "salt_g": 0.0025,
    "sat_fat_g": 0.119,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173736",
  "state": "Boiled",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "boiled",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
