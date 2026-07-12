/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-nut",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707492",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Brazil nuts",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 11.7,
    "energy_kcal": 659.0,
    "fat_g": 67.1,
    "fibre_g": 7.5,
    "folate_ug": 22.0,
    "iron_mg": 2.43,
    "magnesium_mg": 376.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 725.0,
    "potassium_mg": 659.0,
    "protein_g": 14.3,
    "salt_g": 0.0075,
    "sat_fat_g": 16.1,
    "sodium_mg": 3.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 5.65,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707492",
  "state": "Unspecified",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
