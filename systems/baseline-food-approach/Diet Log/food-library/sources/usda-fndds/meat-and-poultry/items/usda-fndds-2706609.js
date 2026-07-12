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
  "id": "usda-fndds-2706609",
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
  "name": "Beef, noodles, and vegetables excluding carrots, broccoli, and dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 7.44,
    "energy_kcal": 139.0,
    "fat_g": 7.64,
    "fibre_g": 1.0,
    "folate_ug": 14.0,
    "iron_mg": 1.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 85.0,
    "potassium_mg": 198.0,
    "protein_g": 10.4,
    "salt_g": 0.515,
    "sat_fat_g": 1.68,
    "sodium_mg": 206.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 11.4,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 23.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706609",
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
