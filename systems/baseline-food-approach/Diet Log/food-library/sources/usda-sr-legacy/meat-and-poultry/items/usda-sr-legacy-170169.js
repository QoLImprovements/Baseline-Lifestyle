/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-shredded",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170169",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 397.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "piece-2-x-2-x-1-2",
      "kind": "unit",
      "label": "piece (2\" x 2\" x 1/2\")"
    }
  ],
  "name": "Nuts, coconut meat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 15.2,
    "energy_kcal": 354.0,
    "fat_g": 33.5,
    "fibre_g": 9.0,
    "folate_ug": 26.0,
    "iron_mg": 2.43,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 356.0,
    "protein_g": 3.33,
    "salt_g": 0.05,
    "sat_fat_g": 29.7,
    "sodium_mg": 20.0,
    "sugar_g": 6.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170169",
  "state": "Raw",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "meat-and-poultry",
    "nut-and-seed-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
