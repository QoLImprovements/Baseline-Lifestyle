/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "fl-oz",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-174295",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soymilk, chocolate, with added calcium, vitamins A and D",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 9.95,
    "energy_kcal": 262.0,
    "fat_g": 1.53,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 0.48,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 143.0,
    "protein_g": 2.26,
    "salt_g": 0.1325,
    "sat_fat_g": 0.24,
    "sodium_mg": 53.0,
    "sugar_g": 7.86,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174295",
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
