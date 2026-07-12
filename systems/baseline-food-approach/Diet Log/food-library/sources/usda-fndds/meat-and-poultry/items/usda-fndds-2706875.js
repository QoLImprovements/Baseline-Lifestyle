/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706875",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Livers, chicken, chopped, with eggs and onion",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 2.87,
    "energy_kcal": 226.0,
    "fat_g": 17.7,
    "fibre_g": 0.4,
    "folate_ug": 261.0,
    "iron_mg": 5.26,
    "magnesium_mg": 15.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 210.0,
    "potassium_mg": 170.0,
    "protein_g": 12.9,
    "salt_g": 2.625,
    "sat_fat_g": 5.35,
    "sodium_mg": 1050.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 1740.0,
    "vitamin_c_mg": 13.9,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706875",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
