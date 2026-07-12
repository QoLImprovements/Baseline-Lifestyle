/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cubic-inch",
  "description": "Ground beef",
  "id": "usda-fndds-2705910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    }
  ],
  "name": "Veal, ground",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 1.5,
    "energy_kcal": 213.0,
    "fat_g": 11.7,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.49,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 229.0,
    "potassium_mg": 243.0,
    "protein_g": 25.6,
    "salt_g": 1.13,
    "sat_fat_g": 4.33,
    "sodium_mg": 452.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705910",
  "state": "Unspecified",
  "subcategory": "Ground beef",
  "tags": [
    "ground-beef",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
