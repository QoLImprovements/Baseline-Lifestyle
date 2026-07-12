/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707407",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beans with meat, NS as to type",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 20.6,
    "energy_kcal": 184.0,
    "fat_g": 6.88,
    "fibre_g": 7.1,
    "folate_ug": 127.0,
    "iron_mg": 1.95,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 377.0,
    "protein_g": 10.7,
    "salt_g": 0.6875,
    "sat_fat_g": 1.15,
    "sodium_mg": 275.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.82,
    "vitamin_k_ug": 8.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707407",
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
