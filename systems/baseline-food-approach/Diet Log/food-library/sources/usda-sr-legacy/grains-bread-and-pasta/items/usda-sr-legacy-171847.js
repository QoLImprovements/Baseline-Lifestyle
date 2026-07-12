/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "2-cookie-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171847",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "2-cookie-1-serving",
      "kind": "unit",
      "label": "2 cookie 1 serving"
    }
  ],
  "name": "Cookies, coconut macaroon",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 61.2,
    "energy_kcal": 460.0,
    "fat_g": 22.6,
    "fibre_g": 5.1,
    "folate_ug": 3.0,
    "iron_mg": 0.82,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 123.0,
    "protein_g": 3.02,
    "salt_g": 0.6025,
    "sat_fat_g": 20.1,
    "sodium_mg": 241.0,
    "sugar_g": 45.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171847",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
