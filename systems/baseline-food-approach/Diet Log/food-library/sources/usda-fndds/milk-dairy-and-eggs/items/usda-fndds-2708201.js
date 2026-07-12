/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large-single-serving-bag",
  "description": "Tortilla, corn, other chips",
  "id": "usda-fndds-2708201",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Cheese flavored corn snacks, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 357.0,
    "carbs_g": 72.4,
    "energy_kcal": 432.0,
    "fat_g": 12.1,
    "fibre_g": 3.6,
    "folate_ug": 97.0,
    "iron_mg": 1.28,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 357.0,
    "potassium_mg": 286.0,
    "protein_g": 8.5,
    "salt_g": 2.105,
    "sat_fat_g": 2.1,
    "sodium_mg": 842.0,
    "sugar_g": 7.29,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 21.4,
    "vitamin_e_mg": 4.25,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708201",
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
