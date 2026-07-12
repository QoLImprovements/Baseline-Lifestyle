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
  "id": "usda-fndds-2706539",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey and rice with cream sauce",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 12.8,
    "energy_kcal": 136.0,
    "fat_g": 5.86,
    "fibre_g": 0.5,
    "folate_ug": 26.0,
    "iron_mg": 0.83,
    "magnesium_mg": 15.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 106.0,
    "potassium_mg": 147.0,
    "protein_g": 8.13,
    "salt_g": 0.95,
    "sat_fat_g": 1.45,
    "sodium_mg": 380.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 14.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706539",
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
