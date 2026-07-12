/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-bean",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2710041",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green beans, cooked, Szechuan-style",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 8.37,
    "energy_kcal": 106.0,
    "fat_g": 6.96,
    "fibre_g": 3.0,
    "folate_ug": 28.0,
    "iron_mg": 0.84,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 309.0,
    "protein_g": 2.54,
    "salt_g": 0.565,
    "sat_fat_g": 0.951,
    "sodium_mg": 226.0,
    "sugar_g": 2.25,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 10.3,
    "vitamin_e_mg": 1.64,
    "vitamin_k_ug": 56.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710041",
  "state": "Cooked",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "cooked",
    "legumes-and-pulses",
    "stir-fry-and-soy-based-sauce-mixtures"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
