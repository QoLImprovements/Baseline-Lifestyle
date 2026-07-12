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
  "id": "usda-fndds-2706695",
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
    },
    {
      "gramsPerUnit": 499.0,
      "key": "1-jack-in-the-box-bowl",
      "kind": "unit",
      "label": "1 Jack-in-the-Box Bowl"
    }
  ],
  "name": "Chicken or turkey, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 7.95,
    "energy_kcal": 131.0,
    "fat_g": 6.92,
    "fibre_g": 1.1,
    "folate_ug": 25.0,
    "iron_mg": 0.69,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 213.0,
    "protein_g": 9.36,
    "salt_g": 0.7675,
    "sat_fat_g": 1.15,
    "sodium_mg": 307.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 12.8,
    "vitamin_e_mg": 1.24,
    "vitamin_k_ug": 29.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706695",
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
