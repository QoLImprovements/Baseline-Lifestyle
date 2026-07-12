/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706552",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-ball",
      "kind": "unit",
      "label": "1 ball"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-croquette",
      "kind": "unit",
      "label": "1 croquette"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-cake-or-patty",
      "kind": "unit",
      "label": "1 cake or patty"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Fish, salmon cake or patty",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 4.46,
    "energy_kcal": 285.0,
    "fat_g": 22.1,
    "fibre_g": 0.3,
    "folate_ug": 27.0,
    "iron_mg": 0.71,
    "magnesium_mg": 22.0,
    "omega3_g": 1.323,
    "phosphorus_mg": 198.0,
    "potassium_mg": 282.0,
    "protein_g": 16.1,
    "salt_g": 1.01,
    "sat_fat_g": 4.05,
    "sodium_mg": 404.0,
    "sugar_g": 0.65,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 3.37,
    "vitamin_k_ug": 23.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706552",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fish-and-seafood",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
