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
  "id": "usda-sr-legacy-175242",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, kidney, red, mature seeds, cooked, boiled, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 22.8,
    "energy_kcal": 127.0,
    "fat_g": 0.5,
    "fibre_g": 7.4,
    "folate_ug": 130.0,
    "iron_mg": 2.94,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 142.0,
    "potassium_mg": 403.0,
    "protein_g": 8.67,
    "salt_g": 0.595,
    "sat_fat_g": 0.072,
    "sodium_mg": 238.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175242",
  "state": "Boiled",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "boiled",
    "legumes-and-legume-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
