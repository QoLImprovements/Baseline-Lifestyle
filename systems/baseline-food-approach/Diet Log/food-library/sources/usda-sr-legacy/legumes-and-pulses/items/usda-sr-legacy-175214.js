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
  "id": "usda-sr-legacy-175214",
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
    },
    {
      "gramsPerUnit": 243.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Vitasoy USA, Vitasoy Light Vanilla Soymilk",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 4.1,
    "energy_kcal": 30.0,
    "fat_g": 0.82,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 82.0,
    "protein_g": 1.6,
    "salt_g": 0.1225,
    "sat_fat_g": 0.18,
    "sodium_mg": 49.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 124.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175214",
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
