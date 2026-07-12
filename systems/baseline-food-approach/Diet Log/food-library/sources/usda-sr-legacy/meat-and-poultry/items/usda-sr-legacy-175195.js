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
  "id": "usda-sr-legacy-175195",
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
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 436.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Beans, kidney, red, mature seeds, canned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 14.8,
    "energy_kcal": 81.0,
    "fat_g": 0.36,
    "fibre_g": 4.3,
    "folate_ug": 23.0,
    "iron_mg": 1.25,
    "magnesium_mg": 30.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 106.0,
    "potassium_mg": 260.0,
    "protein_g": 5.22,
    "salt_g": 0.64,
    "sat_fat_g": 0.125,
    "sodium_mg": 256.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175195",
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
