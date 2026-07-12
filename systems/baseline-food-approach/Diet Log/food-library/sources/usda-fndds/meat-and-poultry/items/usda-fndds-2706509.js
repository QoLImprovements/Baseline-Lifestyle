/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706509",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork and rice with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.8,
    "energy_kcal": 140.0,
    "fat_g": 5.0,
    "fibre_g": 0.7,
    "folate_ug": 34.0,
    "iron_mg": 1.13,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 182.0,
    "protein_g": 6.42,
    "salt_g": 0.7775,
    "sat_fat_g": 1.05,
    "sodium_mg": 311.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706509",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
