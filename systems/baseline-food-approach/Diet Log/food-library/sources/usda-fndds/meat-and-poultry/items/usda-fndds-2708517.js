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
  "id": "usda-fndds-2708517",
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
      "gramsPerUnit": 105.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
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
  "name": "Taco, corn tortilla, pork, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 15.3,
    "energy_kcal": 251.0,
    "fat_g": 14.5,
    "fibre_g": 2.1,
    "folate_ug": 2.0,
    "iron_mg": 1.25,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 226.0,
    "potassium_mg": 212.0,
    "protein_g": 14.8,
    "salt_g": 0.9225,
    "sat_fat_g": 4.58,
    "sodium_mg": 369.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708517",
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
