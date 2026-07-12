/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706898",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    }
  ],
  "name": "Quarter Pounder (McDonalds)",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 22.1,
    "energy_kcal": 256.0,
    "fat_g": 11.6,
    "fibre_g": 1.1,
    "folate_ug": 22.0,
    "iron_mg": 1.73,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 225.0,
    "protein_g": 15.7,
    "salt_g": 0.935,
    "sat_fat_g": 4.78,
    "sodium_mg": 374.0,
    "sugar_g": 3.67,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706898",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
