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
  "id": "usda-fndds-2706476",
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
      "gramsPerUnit": 142.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, roast, hash",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 10.7,
    "energy_kcal": 140.0,
    "fat_g": 5.1,
    "fibre_g": 1.0,
    "folate_ug": 8.0,
    "iron_mg": 1.43,
    "magnesium_mg": 17.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 134.0,
    "potassium_mg": 335.0,
    "protein_g": 13.2,
    "salt_g": 1.215,
    "sat_fat_g": 1.3,
    "sodium_mg": 486.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706476",
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
