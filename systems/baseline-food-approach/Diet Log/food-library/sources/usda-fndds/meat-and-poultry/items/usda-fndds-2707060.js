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
  "id": "usda-fndds-2707060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 102.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    }
  ],
  "name": "Hot dog sandwich, beef, on white bun",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 23.7,
    "energy_kcal": 296.0,
    "fat_g": 17.4,
    "fibre_g": 0.8,
    "folate_ug": 41.0,
    "iron_mg": 2.15,
    "magnesium_mg": 17.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 113.0,
    "potassium_mg": 236.0,
    "protein_g": 10.8,
    "salt_g": 1.7025,
    "sat_fat_g": 6.74,
    "sodium_mg": 681.0,
    "sugar_g": 3.92,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707060",
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
