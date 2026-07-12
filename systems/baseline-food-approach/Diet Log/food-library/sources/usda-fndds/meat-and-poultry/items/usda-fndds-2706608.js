/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 7.6,
    "energy_kcal": 139.0,
    "fat_g": 7.58,
    "fibre_g": 1.2,
    "folate_ug": 17.0,
    "iron_mg": 1.08,
    "magnesium_mg": 15.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 86.0,
    "potassium_mg": 202.0,
    "protein_g": 10.3,
    "salt_g": 0.54,
    "sat_fat_g": 1.67,
    "sodium_mg": 216.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 12.6,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 29.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706608",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "meat-and-poultry",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
