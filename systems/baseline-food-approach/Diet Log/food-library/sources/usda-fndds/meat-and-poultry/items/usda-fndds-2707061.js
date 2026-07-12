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
  "id": "usda-fndds-2707061",
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
  "name": "Hot dog sandwich, beef, on wheat bun",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 21.6,
    "energy_kcal": 290.0,
    "fat_g": 17.4,
    "fibre_g": 2.4,
    "folate_ug": 32.0,
    "iron_mg": 2.03,
    "magnesium_mg": 31.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 141.0,
    "potassium_mg": 265.0,
    "protein_g": 11.6,
    "salt_g": 1.6425,
    "sat_fat_g": 6.69,
    "sodium_mg": 657.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707061",
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
