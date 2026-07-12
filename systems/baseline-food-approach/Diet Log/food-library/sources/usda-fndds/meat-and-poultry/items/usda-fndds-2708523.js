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
  "id": "usda-fndds-2708523",
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
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
  "name": "Taco, flour tortilla, beef, with beans, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 22.7,
    "energy_kcal": 221.0,
    "fat_g": 8.92,
    "fibre_g": 2.4,
    "folate_ug": 46.0,
    "iron_mg": 2.39,
    "magnesium_mg": 24.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 174.0,
    "potassium_mg": 217.0,
    "protein_g": 11.8,
    "salt_g": 1.165,
    "sat_fat_g": 3.62,
    "sodium_mg": 466.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708523",
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
