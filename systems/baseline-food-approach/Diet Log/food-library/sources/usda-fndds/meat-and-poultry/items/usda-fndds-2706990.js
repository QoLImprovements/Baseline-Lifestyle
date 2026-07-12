/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2706990",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-regular-or-6-submarine",
      "kind": "unit",
      "label": "1 regular or 6\" submarine"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 270.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Chicken salad sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 18.3,
    "energy_kcal": 246.0,
    "fat_g": 13.7,
    "fibre_g": 1.0,
    "folate_ug": 46.0,
    "iron_mg": 1.43,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 125.0,
    "potassium_mg": 177.0,
    "protein_g": 12.4,
    "salt_g": 1.1825,
    "sat_fat_g": 2.43,
    "sodium_mg": 473.0,
    "sugar_g": 3.18,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 30.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706990",
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
