/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-regular",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708516",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Taco, corn tortilla, beef, with beans, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 19.1,
    "energy_kcal": 212.0,
    "fat_g": 10.6,
    "fibre_g": 3.2,
    "folate_ug": 12.0,
    "iron_mg": 1.43,
    "magnesium_mg": 41.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 202.0,
    "potassium_mg": 232.0,
    "protein_g": 10.6,
    "salt_g": 0.9925,
    "sat_fat_g": 3.16,
    "sodium_mg": 397.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708516",
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
