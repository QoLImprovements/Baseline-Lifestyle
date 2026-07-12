/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2706991",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Chicken salad sandwich on wheat",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 17.1,
    "energy_kcal": 245.0,
    "fat_g": 13.8,
    "fibre_g": 2.1,
    "folate_ug": 34.0,
    "iron_mg": 1.36,
    "magnesium_mg": 29.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 143.0,
    "potassium_mg": 201.0,
    "protein_g": 13.1,
    "salt_g": 1.1725,
    "sat_fat_g": 2.4,
    "sodium_mg": 469.0,
    "sugar_g": 3.13,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 31.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706991",
  "state": "Unspecified",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
