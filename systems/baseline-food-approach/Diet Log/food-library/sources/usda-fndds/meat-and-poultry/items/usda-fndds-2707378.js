/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pinto beans with meat",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 21.1,
    "energy_kcal": 186.0,
    "fat_g": 6.9,
    "fibre_g": 7.2,
    "folate_ug": 131.0,
    "iron_mg": 1.94,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 393.0,
    "protein_g": 10.7,
    "salt_g": 0.6875,
    "sat_fat_g": 1.15,
    "sodium_mg": 275.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 8.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707378",
  "state": "Unspecified",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
