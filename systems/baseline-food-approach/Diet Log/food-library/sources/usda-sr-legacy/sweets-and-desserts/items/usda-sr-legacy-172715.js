/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-3-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "serving-3-cookies",
      "kind": "unit",
      "label": "serving 3 cookies"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, chocolate chip, commercially prepared, regular, lower fat",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 67.5,
    "energy_kcal": 451.0,
    "fat_g": 17.9,
    "fibre_g": 3.0,
    "folate_ug": 62.0,
    "iron_mg": 3.22,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 134.0,
    "protein_g": 5.97,
    "salt_g": 1.045,
    "sat_fat_g": 5.96,
    "sodium_mg": 418.0,
    "sugar_g": 32.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172715",
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
