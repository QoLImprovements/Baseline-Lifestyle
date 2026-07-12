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
  "id": "usda-fndds-2708515",
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
      "gramsPerUnit": 50.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
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
    }
  ],
  "name": "Taco, corn tortilla, beef, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 15.3,
    "energy_kcal": 249.0,
    "fat_g": 13.9,
    "fibre_g": 2.1,
    "folate_ug": 6.0,
    "iron_mg": 1.61,
    "magnesium_mg": 35.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 225.0,
    "potassium_mg": 214.0,
    "protein_g": 15.5,
    "salt_g": 0.9375,
    "sat_fat_g": 4.49,
    "sodium_mg": 375.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708515",
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
