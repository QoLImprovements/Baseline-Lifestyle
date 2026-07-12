/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708559",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Burrito bowl, beef or pork, with beans and rice",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 10.6,
    "energy_kcal": 171.0,
    "fat_g": 8.48,
    "fibre_g": 1.0,
    "folate_ug": 25.0,
    "iron_mg": 1.49,
    "magnesium_mg": 21.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 138.0,
    "potassium_mg": 199.0,
    "protein_g": 12.5,
    "salt_g": 0.775,
    "sat_fat_g": 3.71,
    "sodium_mg": 310.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708559",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "meat-and-poultry",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
