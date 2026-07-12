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
  "id": "usda-fndds-2706375",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chili with meat and beans",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 10.2,
    "energy_kcal": 118.0,
    "fat_g": 4.33,
    "fibre_g": 3.0,
    "folate_ug": 50.0,
    "iron_mg": 1.91,
    "magnesium_mg": 25.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 107.0,
    "potassium_mg": 285.0,
    "protein_g": 9.8,
    "salt_g": 0.85,
    "sat_fat_g": 1.62,
    "sodium_mg": 340.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706375",
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
