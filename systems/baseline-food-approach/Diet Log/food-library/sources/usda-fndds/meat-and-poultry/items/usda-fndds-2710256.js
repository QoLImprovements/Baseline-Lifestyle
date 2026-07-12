/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710256",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "guideline-amount-on-regular-sandwich",
      "kind": "unit",
      "label": "Guideline amount on regular sandwich"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "guideline-amount-on-large-sandwich",
      "kind": "unit",
      "label": "Guideline amount on large sandwich"
    }
  ],
  "name": "Bacon, for use on a sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 2.01,
    "energy_kcal": 494.0,
    "fat_g": 36.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.21,
    "magnesium_mg": 35.0,
    "omega3_g": 0.033,
    "phosphorus_mg": 409.0,
    "potassium_mg": 544.0,
    "protein_g": 39.4,
    "salt_g": 4.5,
    "sat_fat_g": 12.5,
    "sodium_mg": 1800.0,
    "sugar_g": 2.45,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710256",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "meat-and-poultry",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
