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
  "id": "usda-fndds-2706764",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Moo Shu pork, without Chinese pancake",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 4.01,
    "energy_kcal": 153.0,
    "fat_g": 10.7,
    "fibre_g": 0.9,
    "folate_ug": 33.0,
    "iron_mg": 1.12,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 264.0,
    "protein_g": 10.4,
    "salt_g": 2.0375,
    "sat_fat_g": 1.93,
    "sodium_mg": 815.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 1.8,
    "vitamin_k_ug": 33.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706764",
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
