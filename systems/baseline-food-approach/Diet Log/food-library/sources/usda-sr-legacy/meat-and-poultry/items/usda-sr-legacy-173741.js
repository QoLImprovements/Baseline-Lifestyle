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
  "id": "usda-sr-legacy-173741",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, kidney, all types, mature seeds, canned",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 14.5,
    "energy_kcal": 84.0,
    "fat_g": 0.6,
    "fibre_g": 4.3,
    "folate_ug": 36.0,
    "iron_mg": 1.17,
    "magnesium_mg": 27.0,
    "omega3_g": 0.075,
    "phosphorus_mg": 90.0,
    "potassium_mg": 237.0,
    "protein_g": 5.22,
    "salt_g": 0.74,
    "sat_fat_g": 0.141,
    "sodium_mg": 296.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173741",
  "state": "Canned",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "canned",
    "legumes-and-legume-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
