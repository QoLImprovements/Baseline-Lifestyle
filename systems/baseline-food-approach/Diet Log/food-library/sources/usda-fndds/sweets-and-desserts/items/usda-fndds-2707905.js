/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-medium",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707905",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "1-little-debbie-package-twin-wrapped",
      "kind": "unit",
      "label": "1 Little Debbie package (twin wrapped)"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Cookie, brownie, with icing or filling",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 63.6,
    "energy_kcal": 401.0,
    "fat_g": 17.0,
    "fibre_g": 1.5,
    "folate_ug": 24.0,
    "iron_mg": 1.83,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 173.0,
    "protein_g": 2.94,
    "salt_g": 0.585,
    "sat_fat_g": 4.88,
    "sodium_mg": 234.0,
    "sugar_g": 47.2,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707905",
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
