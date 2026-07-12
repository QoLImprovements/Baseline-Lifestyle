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
  "id": "usda-fndds-2706628",
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
  "name": "Beef, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 7.9,
    "energy_kcal": 143.0,
    "fat_g": 7.7,
    "fibre_g": 1.1,
    "folate_ug": 25.0,
    "iron_mg": 1.24,
    "magnesium_mg": 17.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 90.0,
    "potassium_mg": 209.0,
    "protein_g": 10.6,
    "salt_g": 0.5425,
    "sat_fat_g": 1.7,
    "sodium_mg": 217.0,
    "sugar_g": 1.31,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 12.8,
    "vitamin_e_mg": 1.24,
    "vitamin_k_ug": 30.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706628",
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
