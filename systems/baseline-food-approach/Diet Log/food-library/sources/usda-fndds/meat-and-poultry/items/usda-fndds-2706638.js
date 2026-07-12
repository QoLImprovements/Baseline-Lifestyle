/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ham or pork, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 13.8,
    "energy_kcal": 125.0,
    "fat_g": 5.02,
    "fibre_g": 1.5,
    "folate_ug": 46.0,
    "iron_mg": 1.16,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 182.0,
    "protein_g": 6.48,
    "salt_g": 0.785,
    "sat_fat_g": 1.03,
    "sodium_mg": 314.0,
    "sugar_g": 1.62,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706638",
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
