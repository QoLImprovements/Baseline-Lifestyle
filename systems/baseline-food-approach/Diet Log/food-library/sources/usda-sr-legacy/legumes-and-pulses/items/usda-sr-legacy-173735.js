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
  "id": "usda-sr-legacy-173735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, black, mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 23.7,
    "energy_kcal": 552.0,
    "fat_g": 0.54,
    "fibre_g": 8.7,
    "folate_ug": 149.0,
    "iron_mg": 2.1,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 355.0,
    "protein_g": 8.86,
    "salt_g": 0.0025,
    "sat_fat_g": 0.139,
    "sodium_mg": 1.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173735",
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
