/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    }
  ],
  "name": "Hot dog sandwich, meat and poultry, on wheat bread",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 19.0,
    "energy_kcal": 272.0,
    "fat_g": 17.2,
    "fibre_g": 1.9,
    "folate_ug": 28.0,
    "iron_mg": 1.77,
    "magnesium_mg": 26.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 166.0,
    "potassium_mg": 288.0,
    "protein_g": 10.3,
    "salt_g": 1.735,
    "sat_fat_g": 5.22,
    "sodium_mg": 694.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 11.8,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707067",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
