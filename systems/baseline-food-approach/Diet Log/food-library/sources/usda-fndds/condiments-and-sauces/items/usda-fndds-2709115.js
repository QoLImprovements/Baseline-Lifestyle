/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709115",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, white, with vegetables and gravy, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 18.6,
    "energy_kcal": 107.0,
    "fat_g": 2.4,
    "fibre_g": 1.1,
    "folate_ug": 34.0,
    "iron_mg": 0.81,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 63.0,
    "protein_g": 2.15,
    "salt_g": 0.5925,
    "sat_fat_g": 0.419,
    "sodium_mg": 237.0,
    "sugar_g": 0.73,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709115",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "condiments-and-sauces",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
