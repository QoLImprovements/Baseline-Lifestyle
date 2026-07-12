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
  "id": "usda-sr-legacy-175196",
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
  "name": "Beans, kidney, royal red, mature seeds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 58.3,
    "energy_kcal": 1380.0,
    "fat_g": 0.45,
    "fibre_g": 24.9,
    "folate_ug": 393.0,
    "iron_mg": 8.7,
    "magnesium_mg": 138.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 406.0,
    "potassium_mg": 1350.0,
    "protein_g": 25.3,
    "salt_g": 0.0325,
    "sat_fat_g": 0.065,
    "sodium_mg": 13.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175196",
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
