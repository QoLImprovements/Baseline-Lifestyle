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
  "id": "usda-sr-legacy-172442",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Miso",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 25.4,
    "energy_kcal": 828.0,
    "fat_g": 6.01,
    "fibre_g": 5.4,
    "folate_ug": 19.0,
    "iron_mg": 2.49,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 210.0,
    "protein_g": 12.8,
    "salt_g": 9.325,
    "sat_fat_g": 1.02,
    "sodium_mg": 3730.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 29.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172442",
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
