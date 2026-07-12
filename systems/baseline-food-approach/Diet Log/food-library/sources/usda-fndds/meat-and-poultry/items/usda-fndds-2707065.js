/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hot dog sandwich, meat and poultry, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 22.8,
    "energy_kcal": 271.0,
    "fat_g": 15.3,
    "fibre_g": 2.4,
    "folate_ug": 35.0,
    "iron_mg": 1.97,
    "magnesium_mg": 31.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 166.0,
    "potassium_mg": 274.0,
    "protein_g": 10.5,
    "salt_g": 1.6425,
    "sat_fat_g": 4.56,
    "sodium_mg": 657.0,
    "sugar_g": 3.83,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707065",
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
