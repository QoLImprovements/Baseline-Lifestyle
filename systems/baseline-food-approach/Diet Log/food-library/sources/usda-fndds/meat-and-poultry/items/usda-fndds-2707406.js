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
  "id": "usda-fndds-2707406",
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
  "name": "Pork and beans",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 21.6,
    "energy_kcal": 105.0,
    "fat_g": 0.89,
    "fibre_g": 4.4,
    "folate_ug": 8.0,
    "iron_mg": 1.4,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 231.0,
    "protein_g": 4.52,
    "salt_g": 0.9775,
    "sat_fat_g": 0.231,
    "sodium_mg": 391.0,
    "sugar_g": 8.23,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707406",
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
