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
  "id": "usda-sr-legacy-173767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soymilk, chocolate and other flavors, light, with added calcium, vitamins A and D",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 8.24,
    "energy_kcal": 197.0,
    "fat_g": 0.64,
    "fibre_g": 0.7,
    "folate_ug": 9.0,
    "iron_mg": 0.59,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 144.0,
    "protein_g": 2.1,
    "salt_g": 0.115,
    "sat_fat_g": 0.032,
    "sodium_mg": 46.0,
    "sugar_g": 7.13,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173767",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
