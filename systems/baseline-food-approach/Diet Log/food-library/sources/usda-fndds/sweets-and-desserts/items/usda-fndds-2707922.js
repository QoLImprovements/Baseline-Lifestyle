/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-sandwich-chocolate-covered-include-fudge-covered-oreos",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2707922",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-sandwich-chocolate-covered-include-fudge-covered-oreos",
      "kind": "unit",
      "label": "1 sandwich, chocolate covered (include Fudge Covered Oreos)"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-sandwich-include-double-stuff-oreo",
      "kind": "unit",
      "label": "1 sandwich (include Double Stuff Oreo)"
    }
  ],
  "name": "Cookie, chocolate, sandwich, with extra filling",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 68.2,
    "energy_kcal": 497.0,
    "fat_g": 24.5,
    "fibre_g": 2.7,
    "folate_ug": 46.0,
    "iron_mg": 7.8,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 137.0,
    "protein_g": 4.33,
    "salt_g": 0.8775,
    "sat_fat_g": 5.45,
    "sodium_mg": 351.0,
    "sugar_g": 46.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707922",
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
