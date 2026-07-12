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
  "id": "usda-fndds-2706751",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stir fried beef and vegetables in soy sauce",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 4.44,
    "energy_kcal": 102.0,
    "fat_g": 4.81,
    "fibre_g": 1.0,
    "folate_ug": 24.0,
    "iron_mg": 1.24,
    "magnesium_mg": 18.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 121.0,
    "potassium_mg": 241.0,
    "protein_g": 10.7,
    "salt_g": 0.845,
    "sat_fat_g": 1.84,
    "sodium_mg": 338.0,
    "sugar_g": 2.58,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 18.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706751",
  "state": "Stir-fried",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "meat-and-poultry",
    "stir-fried",
    "stir-fry-and-soy-based-sauce-mixtures"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
