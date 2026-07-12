/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cereal bars",
  "id": "usda-fndds-2708099",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Cereal or granola bar (Quaker Granola Bites)",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 66.3,
    "energy_kcal": 451.0,
    "fat_g": 17.5,
    "fibre_g": 5.7,
    "folate_ug": 33.0,
    "iron_mg": 1.56,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 216.0,
    "potassium_mg": 285.0,
    "protein_g": 7.17,
    "salt_g": 0.4175,
    "sat_fat_g": 9.89,
    "sodium_mg": 167.0,
    "sugar_g": 30.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.51,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708099",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
