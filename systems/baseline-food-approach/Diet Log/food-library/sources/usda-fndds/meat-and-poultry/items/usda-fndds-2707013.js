/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-submarine",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707013",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 322.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 322.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    }
  ],
  "name": "Chicken fillet sandwich, grilled, on white bun, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 17.8,
    "energy_kcal": 235.0,
    "fat_g": 7.92,
    "fibre_g": 0.6,
    "folate_ug": 38.0,
    "iron_mg": 1.46,
    "magnesium_mg": 26.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 229.0,
    "potassium_mg": 247.0,
    "protein_g": 21.6,
    "salt_g": 1.2175,
    "sat_fat_g": 2.95,
    "sodium_mg": 487.0,
    "sugar_g": 2.85,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707013",
  "state": "Grilled",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
