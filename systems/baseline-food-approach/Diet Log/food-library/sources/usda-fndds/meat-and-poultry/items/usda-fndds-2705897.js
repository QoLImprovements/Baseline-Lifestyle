/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Pork",
  "id": "usda-fndds-2705897",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-neckbone",
      "kind": "unit",
      "label": "1 neckbone"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pork, bones",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 236.0,
    "fat_g": 13.8,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.1,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 219.0,
    "potassium_mg": 338.0,
    "protein_g": 26.2,
    "salt_g": 0.91,
    "sat_fat_g": 4.85,
    "sodium_mg": 364.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705897",
  "state": "Unspecified",
  "subcategory": "Pork",
  "tags": [
    "meat-and-poultry",
    "pork",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
