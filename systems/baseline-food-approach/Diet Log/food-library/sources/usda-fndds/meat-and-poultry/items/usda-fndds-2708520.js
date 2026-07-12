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
  "id": "usda-fndds-2708520",
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
      "gramsPerUnit": 160.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    }
  ],
  "name": "Taco, corn tortilla, chicken, with beans, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 19.1,
    "energy_kcal": 193.0,
    "fat_g": 8.44,
    "fibre_g": 3.2,
    "folate_ug": 11.0,
    "iron_mg": 1.02,
    "magnesium_mg": 42.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 208.0,
    "potassium_mg": 230.0,
    "protein_g": 11.0,
    "salt_g": 0.9975,
    "sat_fat_g": 2.14,
    "sodium_mg": 399.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708520",
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
