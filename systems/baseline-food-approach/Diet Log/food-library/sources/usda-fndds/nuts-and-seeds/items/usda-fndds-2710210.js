/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Salad dressings and vegetable oils",
  "id": "usda-fndds-2710210",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.7,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Poppy seed dressing",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 23.7,
    "energy_kcal": 399.0,
    "fat_g": 33.3,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 0.25,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 61.0,
    "protein_g": 0.92,
    "salt_g": 2.3325,
    "sat_fat_g": 6.06,
    "sodium_mg": 933.0,
    "sugar_g": 23.4,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 2.36,
    "vitamin_k_ug": 50.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710210",
  "state": "Unspecified",
  "subcategory": "Salad dressings and vegetable oils",
  "tags": [
    "nuts-and-seeds",
    "salad-dressings-and-vegetable-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
