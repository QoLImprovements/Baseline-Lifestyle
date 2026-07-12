/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-large",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707982",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-small-or-bite-size",
      "kind": "unit",
      "label": "1 small or bite size"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Cookie, vanilla wafer, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 73.6,
    "energy_kcal": 441.0,
    "fat_g": 15.2,
    "fibre_g": 1.9,
    "folate_ug": 60.0,
    "iron_mg": 2.38,
    "magnesium_mg": 14.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 104.0,
    "potassium_mg": 97.0,
    "protein_g": 5.0,
    "salt_g": 0.97,
    "sat_fat_g": 3.84,
    "sodium_mg": 388.0,
    "sugar_g": 37.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707982",
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
