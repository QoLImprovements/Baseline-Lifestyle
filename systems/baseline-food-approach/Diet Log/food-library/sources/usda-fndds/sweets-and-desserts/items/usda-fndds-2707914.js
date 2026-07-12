/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-small",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707914",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 30.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Cookie, chocolate, made with oatmeal and coconut, no bake",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 68.7,
    "energy_kcal": 450.0,
    "fat_g": 18.1,
    "fibre_g": 2.8,
    "folate_ug": 59.0,
    "iron_mg": 2.58,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 142.0,
    "protein_g": 6.2,
    "salt_g": 1.3,
    "sat_fat_g": 4.52,
    "sodium_mg": 520.0,
    "sugar_g": 24.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707914",
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
