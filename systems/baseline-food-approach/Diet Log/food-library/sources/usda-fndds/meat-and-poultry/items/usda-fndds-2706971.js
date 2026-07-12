/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Deli and cured meat sandwiches",
  "id": "usda-fndds-2706971",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ham salad sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 81.0,
    "carbs_g": 18.3,
    "energy_kcal": 242.0,
    "fat_g": 13.3,
    "fibre_g": 1.0,
    "folate_ug": 44.0,
    "iron_mg": 1.5,
    "magnesium_mg": 19.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 122.0,
    "potassium_mg": 191.0,
    "protein_g": 12.0,
    "salt_g": 2.0225,
    "sat_fat_g": 2.5,
    "sodium_mg": 809.0,
    "sugar_g": 3.15,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 29.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706971",
  "state": "Unspecified",
  "subcategory": "Deli and cured meat sandwiches",
  "tags": [
    "deli-and-cured-meat-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
