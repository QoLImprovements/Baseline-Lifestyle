/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174958",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "3-pieces",
      "kind": "unit",
      "label": "3 pieces"
    }
  ],
  "name": "Cookies, graham crackers, chocolate-coated",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 66.8,
    "energy_kcal": 2090.0,
    "fat_g": 25.8,
    "fibre_g": 2.2,
    "folate_ug": 50.0,
    "iron_mg": 2.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 267.0,
    "protein_g": 4.0,
    "salt_g": 0.6625,
    "sat_fat_g": 17.2,
    "sodium_mg": 265.0,
    "sugar_g": 37.3,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174958",
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
