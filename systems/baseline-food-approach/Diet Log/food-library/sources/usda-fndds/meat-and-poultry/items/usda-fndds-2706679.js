/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706679",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 16.6,
    "energy_kcal": 147.0,
    "fat_g": 5.46,
    "fibre_g": 1.5,
    "folate_ug": 60.0,
    "iron_mg": 1.15,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 113.0,
    "protein_g": 7.95,
    "salt_g": 0.8775,
    "sat_fat_g": 0.949,
    "sodium_mg": 351.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 112.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 15.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706679",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
