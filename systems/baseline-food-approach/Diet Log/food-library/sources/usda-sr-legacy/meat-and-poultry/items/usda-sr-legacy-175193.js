/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-175193",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, kidney, all types, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 60.0,
    "energy_kcal": 1390.0,
    "fat_g": 0.83,
    "fibre_g": 24.9,
    "folate_ug": 394.0,
    "iron_mg": 8.2,
    "magnesium_mg": 140.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 407.0,
    "potassium_mg": 1410.0,
    "protein_g": 23.6,
    "salt_g": 0.06,
    "sat_fat_g": 0.12,
    "sodium_mg": 24.0,
    "sugar_g": 2.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 19.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175193",
  "state": "Raw",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
