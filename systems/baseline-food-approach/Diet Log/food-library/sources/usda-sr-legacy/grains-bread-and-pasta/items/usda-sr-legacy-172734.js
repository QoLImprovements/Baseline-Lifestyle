/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cookie-medium-1-5-8-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172734",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "cookie-medium-1-5-8-dia",
      "kind": "unit",
      "label": "cookie, medium (1-5/8\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, oatmeal, commercially prepared, special dietary",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 69.9,
    "energy_kcal": 1880.0,
    "fat_g": 18.0,
    "fibre_g": 2.9,
    "folate_ug": 46.0,
    "iron_mg": 4.07,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 122.0,
    "potassium_mg": 175.0,
    "protein_g": 4.8,
    "salt_g": 0.6825,
    "sat_fat_g": 2.69,
    "sodium_mg": 273.0,
    "sugar_g": 31.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172734",
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
