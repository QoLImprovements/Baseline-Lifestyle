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
  "id": "usda-sr-legacy-172396",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "giblets",
      "kind": "unit",
      "label": "giblets"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, roasting, giblets, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 1.14,
    "energy_kcal": 531.0,
    "fat_g": 5.04,
    "fibre_g": 0.0,
    "folate_ug": 276.0,
    "iron_mg": 5.4,
    "magnesium_mg": 17.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 184.0,
    "potassium_mg": 227.0,
    "protein_g": 18.1,
    "salt_g": 0.1925,
    "sat_fat_g": 1.54,
    "sodium_mg": 77.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2880.0,
    "vitamin_c_mg": 13.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172396",
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
