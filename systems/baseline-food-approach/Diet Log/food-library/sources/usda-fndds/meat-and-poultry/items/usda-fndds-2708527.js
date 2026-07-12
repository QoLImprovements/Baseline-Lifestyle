/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Taco, flour tortilla, chicken, with beans, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 22.7,
    "energy_kcal": 202.0,
    "fat_g": 6.74,
    "fibre_g": 2.4,
    "folate_ug": 45.0,
    "iron_mg": 1.98,
    "magnesium_mg": 26.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 180.0,
    "potassium_mg": 215.0,
    "protein_g": 12.2,
    "salt_g": 1.1675,
    "sat_fat_g": 2.6,
    "sodium_mg": 467.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708527",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
