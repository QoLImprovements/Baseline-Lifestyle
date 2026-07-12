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
  "id": "usda-fndds-2706761",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork and vegetables, Hawaiian style",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 6.97,
    "energy_kcal": 89.0,
    "fat_g": 3.64,
    "fibre_g": 1.9,
    "folate_ug": 17.0,
    "iron_mg": 0.63,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 250.0,
    "protein_g": 7.43,
    "salt_g": 0.505,
    "sat_fat_g": 0.984,
    "sodium_mg": 202.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 20.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706761",
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
