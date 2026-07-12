/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pork, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 7.9,
    "energy_kcal": 144.0,
    "fat_g": 7.89,
    "fibre_g": 1.1,
    "folate_ug": 22.0,
    "iron_mg": 0.81,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 260.0,
    "protein_g": 9.96,
    "salt_g": 0.555,
    "sat_fat_g": 1.73,
    "sodium_mg": 222.0,
    "sugar_g": 1.31,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 29.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706649",
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
