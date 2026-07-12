/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706635",
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
  "name": "Ham or pork, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 16.7,
    "energy_kcal": 148.0,
    "fat_g": 5.19,
    "fibre_g": 1.5,
    "folate_ug": 59.0,
    "iron_mg": 1.22,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 140.0,
    "protein_g": 8.35,
    "salt_g": 0.755,
    "sat_fat_g": 1.18,
    "sodium_mg": 302.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 112.0,
    "vitamin_c_mg": 5.2,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 14.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706635",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
