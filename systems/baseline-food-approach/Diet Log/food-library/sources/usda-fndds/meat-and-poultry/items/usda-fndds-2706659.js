/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-roll",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-roll",
      "kind": "unit",
      "label": "1 roll"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stuffed grape leaves with lamb and rice",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 11.9,
    "energy_kcal": 271.0,
    "fat_g": 21.5,
    "fibre_g": 3.3,
    "folate_ug": 35.0,
    "iron_mg": 1.83,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 191.0,
    "protein_g": 8.17,
    "salt_g": 0.1775,
    "sat_fat_g": 5.56,
    "sodium_mg": 71.0,
    "sugar_g": 2.39,
    "vitamin_a_ug": 359.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 3.24,
    "vitamin_k_ug": 72.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706659",
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
