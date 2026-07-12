/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-stirred",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174273",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "cup-stirred",
      "kind": "unit",
      "label": "cup, stirred"
    },
    {
      "gramsPerUnit": 5.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Soy flour, full-fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 206.0,
    "carbs_g": 31.9,
    "energy_kcal": 434.0,
    "fat_g": 20.6,
    "fibre_g": 9.6,
    "folate_ug": 345.0,
    "iron_mg": 6.37,
    "magnesium_mg": 429.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 494.0,
    "potassium_mg": 2520.0,
    "protein_g": 37.8,
    "salt_g": 0.0325,
    "sat_fat_g": 2.99,
    "sodium_mg": 13.0,
    "sugar_g": 7.5,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.95,
    "vitamin_k_ug": 70.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174273",
  "state": "Raw",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
