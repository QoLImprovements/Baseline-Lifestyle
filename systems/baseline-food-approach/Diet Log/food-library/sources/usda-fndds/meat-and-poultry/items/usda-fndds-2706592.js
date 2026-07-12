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
  "id": "usda-fndds-2706592",
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
  "name": "Stew, beef",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 6.29,
    "energy_kcal": 107.0,
    "fat_g": 5.07,
    "fibre_g": 1.3,
    "folate_ug": 15.0,
    "iron_mg": 0.97,
    "magnesium_mg": 16.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 85.0,
    "potassium_mg": 254.0,
    "protein_g": 8.76,
    "salt_g": 0.7675,
    "sat_fat_g": 1.93,
    "sodium_mg": 307.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706592",
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
