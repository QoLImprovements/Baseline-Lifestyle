/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey hash",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 8.27,
    "energy_kcal": 110.0,
    "fat_g": 4.1,
    "fibre_g": 1.3,
    "folate_ug": 22.0,
    "iron_mg": 0.67,
    "magnesium_mg": 22.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 96.0,
    "potassium_mg": 334.0,
    "protein_g": 9.57,
    "salt_g": 0.6475,
    "sat_fat_g": 0.742,
    "sodium_mg": 259.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 12.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706527",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
