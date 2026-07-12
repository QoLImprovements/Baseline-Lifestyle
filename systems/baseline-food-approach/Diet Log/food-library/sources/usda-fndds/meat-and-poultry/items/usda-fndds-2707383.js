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
  "id": "usda-fndds-2707383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Kidney beans, from canned, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 24.7,
    "energy_kcal": 135.0,
    "fat_g": 0.6,
    "fibre_g": 8.0,
    "folate_ug": 39.0,
    "iron_mg": 2.08,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 433.0,
    "protein_g": 8.7,
    "salt_g": 0.7775,
    "sat_fat_g": 0.208,
    "sodium_mg": 311.0,
    "sugar_g": 3.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707383",
  "state": "Canned",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "canned",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
