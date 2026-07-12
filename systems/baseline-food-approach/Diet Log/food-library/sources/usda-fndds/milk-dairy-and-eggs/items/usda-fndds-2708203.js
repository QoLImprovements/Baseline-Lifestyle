/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708203",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-puff",
      "kind": "unit",
      "label": "1 puff"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    }
  ],
  "name": "Cheese flavored corn snacks (Cheetos)",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 54.5,
    "energy_kcal": 567.0,
    "fat_g": 36.5,
    "fibre_g": 0.8,
    "folate_ug": 80.0,
    "iron_mg": 1.69,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 126.0,
    "potassium_mg": 180.0,
    "protein_g": 5.46,
    "salt_g": 2.32,
    "sat_fat_g": 3.75,
    "sodium_mg": 928.0,
    "sugar_g": 3.57,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 4.18,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708203",
  "state": "Unspecified",
  "subcategory": "Tortilla, corn, other chips",
  "tags": [
    "milk-dairy-and-eggs",
    "tortilla-corn-other-chips",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
