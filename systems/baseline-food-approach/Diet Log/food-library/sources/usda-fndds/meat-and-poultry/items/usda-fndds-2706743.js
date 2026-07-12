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
  "id": "usda-fndds-2706743",
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
  "name": "Kung Pao beef",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 4.55,
    "energy_kcal": 216.0,
    "fat_g": 14.4,
    "fibre_g": 1.0,
    "folate_ug": 20.0,
    "iron_mg": 1.57,
    "magnesium_mg": 29.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 136.0,
    "potassium_mg": 225.0,
    "protein_g": 17.9,
    "salt_g": 0.4375,
    "sat_fat_g": 3.15,
    "sodium_mg": 175.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 11.7,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 14.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706743",
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
