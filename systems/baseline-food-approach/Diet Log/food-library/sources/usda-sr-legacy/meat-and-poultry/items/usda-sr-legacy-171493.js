/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "leg-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171493",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 816.0,
      "key": "leg-bone-removed",
      "kind": "unit",
      "label": "leg, bone removed"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-turkey",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook turkey)"
    }
  ],
  "name": "Turkey, all classes, leg, meat and skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 602.0,
    "fat_g": 6.72,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.72,
    "magnesium_mg": 21.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 177.0,
    "potassium_mg": 273.0,
    "protein_g": 19.5,
    "salt_g": 0.185,
    "sat_fat_g": 2.06,
    "sodium_mg": 74.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171493",
  "state": "Raw",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
