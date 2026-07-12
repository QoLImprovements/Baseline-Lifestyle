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
  "id": "usda-sr-legacy-173765",
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
  "name": "Soymilk (All flavors), enhanced",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 3.45,
    "energy_kcal": 189.0,
    "fat_g": 1.99,
    "fibre_g": 0.4,
    "folate_ug": 32.0,
    "iron_mg": 0.49,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 141.0,
    "protein_g": 2.94,
    "salt_g": 0.125,
    "sat_fat_g": 0.206,
    "sodium_mg": 50.0,
    "sugar_g": 2.53,
    "vitamin_a_ug": 393.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 2.52,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173765",
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
