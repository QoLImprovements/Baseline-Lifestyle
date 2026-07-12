/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cookie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172717",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 12.2,
      "key": "cookie-average-weight-of-1-cookie",
      "kind": "unit",
      "label": "cookie (average weight of 1 cookie)"
    }
  ],
  "name": "Cookies, chocolate chip, commercially prepared, soft-type",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 65.8,
    "energy_kcal": 444.0,
    "fat_g": 19.8,
    "fibre_g": 1.8,
    "folate_ug": 27.0,
    "iron_mg": 4.07,
    "magnesium_mg": 29.0,
    "omega3_g": 0.051,
    "phosphorus_mg": 61.0,
    "potassium_mg": 130.0,
    "protein_g": 3.63,
    "salt_g": 0.69,
    "sat_fat_g": 9.75,
    "sodium_mg": 276.0,
    "sugar_g": 37.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172717",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
