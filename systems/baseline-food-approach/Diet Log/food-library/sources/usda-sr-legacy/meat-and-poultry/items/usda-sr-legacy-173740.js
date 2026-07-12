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
  "id": "usda-sr-legacy-173740",
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
    },
    {
      "gramsPerUnit": 11.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Beans, kidney, all types, mature seeds, cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 22.8,
    "energy_kcal": 532.0,
    "fat_g": 0.5,
    "fibre_g": 6.4,
    "folate_ug": 130.0,
    "iron_mg": 2.22,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 405.0,
    "protein_g": 8.67,
    "salt_g": 0.0025,
    "sat_fat_g": 0.073,
    "sodium_mg": 1.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173740",
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
