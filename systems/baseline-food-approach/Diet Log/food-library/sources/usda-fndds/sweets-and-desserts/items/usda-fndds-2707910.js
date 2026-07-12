/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-extra-large",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-extra-large",
      "kind": "unit",
      "label": "1 extra large"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cookie, chocolate chip, made from home recipe or purchased at a bakery",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 59.2,
    "energy_kcal": 505.0,
    "fat_g": 29.0,
    "fibre_g": 2.5,
    "folate_ug": 39.0,
    "iron_mg": 2.3,
    "magnesium_mg": 51.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 112.0,
    "potassium_mg": 194.0,
    "protein_g": 5.83,
    "salt_g": 0.6525,
    "sat_fat_g": 12.0,
    "sodium_mg": 261.0,
    "sugar_g": 41.2,
    "vitamin_a_ug": 128.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707910",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
