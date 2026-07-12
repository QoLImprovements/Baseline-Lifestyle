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
  "id": "usda-fndds-2706992",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    }
  ],
  "name": "Chicken salad sandwich wrap",
  "nutritionPerBasis": {
    "calcium_mg": 149.0,
    "carbs_g": 17.0,
    "energy_kcal": 269.0,
    "fat_g": 16.6,
    "fibre_g": 1.3,
    "folate_ug": 38.0,
    "iron_mg": 1.41,
    "magnesium_mg": 18.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 200.0,
    "potassium_mg": 177.0,
    "protein_g": 12.9,
    "salt_g": 1.5075,
    "sat_fat_g": 4.51,
    "sodium_mg": 603.0,
    "sugar_g": 2.65,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 29.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706992",
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
