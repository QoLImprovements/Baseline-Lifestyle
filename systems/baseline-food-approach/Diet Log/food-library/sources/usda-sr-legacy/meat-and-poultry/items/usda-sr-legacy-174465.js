/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "giblets",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-174465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "giblets",
      "kind": "unit",
      "label": "giblets"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-capon",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to cook capon)"
    }
  ],
  "name": "Chicken, capons, giblets, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 1.42,
    "energy_kcal": 544.0,
    "fat_g": 5.18,
    "fibre_g": 0.0,
    "folate_ug": 394.0,
    "iron_mg": 6.25,
    "magnesium_mg": 18.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 207.0,
    "potassium_mg": 226.0,
    "protein_g": 18.3,
    "salt_g": 0.1925,
    "sat_fat_g": 1.64,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4370.0,
    "vitamin_c_mg": 18.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174465",
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
