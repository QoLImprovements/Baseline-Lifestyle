/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2710006",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-teaspoon",
      "kind": "unit",
      "label": "1 teaspoon"
    }
  ],
  "name": "Yeast extract spread",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 20.4,
    "energy_kcal": 185.0,
    "fat_g": 0.9,
    "fibre_g": 6.5,
    "folate_ug": 3790.0,
    "iron_mg": 4.04,
    "magnesium_mg": 180.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 2100.0,
    "protein_g": 23.9,
    "salt_g": 8.45,
    "sat_fat_g": 0.0,
    "sodium_mg": 3380.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710006",
  "state": "Unspecified",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "fungi",
    "mustard-and-other-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
