/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chili with meat",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.41,
    "energy_kcal": 139.0,
    "fat_g": 8.22,
    "fibre_g": 0.5,
    "folate_ug": 7.0,
    "iron_mg": 1.51,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 109.0,
    "potassium_mg": 222.0,
    "protein_g": 13.3,
    "salt_g": 0.8925,
    "sat_fat_g": 3.16,
    "sodium_mg": 357.0,
    "sugar_g": 1.37,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706377",
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
