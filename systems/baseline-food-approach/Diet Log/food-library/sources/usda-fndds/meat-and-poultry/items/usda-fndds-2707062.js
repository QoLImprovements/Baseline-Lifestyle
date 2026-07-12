/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-1-slice-bread",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707062",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "1-sandwich-1-slice-bread",
      "kind": "unit",
      "label": "1 sandwich (1 slice bread)"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Hot dog sandwich, beef, on white bread",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 18.9,
    "energy_kcal": 295.0,
    "fat_g": 19.6,
    "fibre_g": 0.8,
    "folate_ug": 38.0,
    "iron_mg": 1.91,
    "magnesium_mg": 17.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 119.0,
    "potassium_mg": 254.0,
    "protein_g": 10.9,
    "salt_g": 1.745,
    "sat_fat_g": 7.75,
    "sodium_mg": 698.0,
    "sugar_g": 2.67,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707062",
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
