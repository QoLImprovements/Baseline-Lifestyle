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
  "id": "usda-fndds-2706417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-patty-with-sauce-and-cheese",
      "kind": "unit",
      "label": "1 patty with sauce and cheese"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Veal parmigiana",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 8.33,
    "energy_kcal": 204.0,
    "fat_g": 11.9,
    "fibre_g": 0.8,
    "folate_ug": 16.0,
    "iron_mg": 1.26,
    "magnesium_mg": 33.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 215.0,
    "potassium_mg": 248.0,
    "protein_g": 15.3,
    "salt_g": 1.09,
    "sat_fat_g": 4.11,
    "sodium_mg": 436.0,
    "sugar_g": 1.68,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706417",
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
