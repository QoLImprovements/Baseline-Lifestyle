/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-package",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707575",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Trail mix with nuts",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 21.1,
    "energy_kcal": 604.0,
    "fat_g": 53.0,
    "fibre_g": 7.9,
    "folate_ug": 99.0,
    "iron_mg": 3.18,
    "magnesium_mg": 204.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 543.0,
    "potassium_mg": 648.0,
    "protein_g": 20.1,
    "salt_g": 0.63,
    "sat_fat_g": 7.28,
    "sodium_mg": 252.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 10.2,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707575",
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
