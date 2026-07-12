/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-large-bar",
      "kind": "unit",
      "label": "1 large bar"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-small-bar",
      "kind": "unit",
      "label": "1 small bar"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "1-medium-bar",
      "kind": "unit",
      "label": "1 medium bar"
    }
  ],
  "name": "Cookie, peanut butter with rice cereal, no bake",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 80.5,
    "energy_kcal": 417.0,
    "fat_g": 9.0,
    "fibre_g": 0.0,
    "folate_ug": 241.0,
    "iron_mg": 2.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 39.0,
    "protein_g": 3.4,
    "salt_g": 0.8775,
    "sat_fat_g": 1.4,
    "sodium_mg": 351.0,
    "sugar_g": 19.4,
    "vitamin_a_ug": 270.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707954",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
