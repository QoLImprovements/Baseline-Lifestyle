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
  "id": "usda-sr-legacy-172470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Peanut butter, smooth style, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 22.3,
    "energy_kcal": 2500.0,
    "fat_g": 51.4,
    "fibre_g": 5.0,
    "folate_ug": 87.0,
    "iron_mg": 1.74,
    "magnesium_mg": 168.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 335.0,
    "potassium_mg": 558.0,
    "protein_g": 22.2,
    "salt_g": 0.0425,
    "sat_fat_g": 10.3,
    "sodium_mg": 17.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.1,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172470",
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
